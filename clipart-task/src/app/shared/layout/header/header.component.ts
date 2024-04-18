import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { DataService } from '../../services/data-service.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/models';
import { MobileMenuComponent } from '../../components/mobile-menu/mobile-menu.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports:[
        CommonModule,
        SearchInputComponent,
        MobileMenuComponent
    ]
})
export class HeaderComponent implements OnInit, AfterViewInit{
    @ViewChild('categories') categories: ElementRef;
    @ViewChildren('children') children!: QueryList<ElementRef>;
    @ViewChild('other') other!: ElementRef;
    private dataService = inject(DataService)
    public categories$:Observable<Category[]>
    public categoryData:Category[];
    public otherData:Category[] = [];
    public showOtherData:boolean = false;
    public showOtherCategories:boolean = false ;
    public menuOpen:boolean = false ;


    constructor(
        private cdr:ChangeDetectorRef
    ){}


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
    onResize() {
        this.checkOverflow()
    }



    public checkOverflow(){
        setTimeout(() =>{
            let parentOffsetWidth = this.categories.nativeElement.offsetWidth;
            let parentScrollWidth = this.categories.nativeElement.scrollWidth;
            if(parentScrollWidth > parentOffsetWidth){
                this.showOtherData = true;
                parentOffsetWidth+=55;
                this.otherData = []
                this.children.map((p:any , index:number) => {
                   parentOffsetWidth = parentOffsetWidth  - (p.nativeElement.offsetWidth + 32)
                   if(parentOffsetWidth <= 0 && !this.otherData.includes(this.categoryData[index])){
                       this.otherData = [...this.otherData,this.categoryData[index]] 
                   }
                   this.cdr.detectChanges()
               })
            }
        },0)

    }

    public onToggle(){
        this.showOtherCategories = !this.showOtherCategories;
        console.log(this.otherData)
    }

    public onMenuToggle(){
        this.menuOpen = !this.menuOpen
    }
}

