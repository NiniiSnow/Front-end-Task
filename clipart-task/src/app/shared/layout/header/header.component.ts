import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { DataService } from '../../services/data-service.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports:[
        CommonModule,
        SearchInputComponent
    ]
})
export class HeaderComponent implements OnInit, AfterViewInit{
    @ViewChild('categories') categories: ElementRef;
    @ViewChildren('children') children!: QueryList<any>;

    constructor(
        private cdr:ChangeDetectorRef
    ){}

    private dataService = inject(DataService)
    categories$:Observable<Category[]>

    categoryData:any[]
    remaining:any[] = []

    ngOnInit(): void {
        this.categories$ = this.dataService.getCategories();
        this.dataService.getCategories().subscribe(data => 
            this.categoryData = data
        )
    }


    ngAfterViewInit(): void {
        this.checkOverflow()
        this.children.changes.subscribe(() => {
            this.checkOverflow()
        })
    }

    @HostListener('window:resize', ['$event.target.innerWidth'])
    onResize(width: number) {
        this.checkOverflow()
    }



    public checkOverflow(){
        setTimeout(() =>{
            let parentWidth = this.categories.nativeElement.offsetWidth;
             this.children.map((p:any , index:number) => {
                parentWidth = parentWidth - (p.nativeElement.offsetWidth + 32)
                if(parentWidth <= 0 && !this.remaining.includes(this.categoryData[index])){
                    this.remaining = [...this.remaining,this.categoryData[index]] 
                }

                this.cdr.detectChanges()
            }
            )
        },0)

    }
}

