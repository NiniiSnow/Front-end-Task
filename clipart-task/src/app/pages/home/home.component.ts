import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataService } from 'src/app/shared/services/data-service.service';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[
    CommonModule,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private dataService = inject(DataService)
  constructor(){}
  ngOnInit(): void {
    this.dataService.getData().subscribe(res => console.log(res))
  }
}
