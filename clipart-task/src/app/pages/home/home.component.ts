import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from 'src/app/shared/services/data-service.service';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[
    CommonModule,
    HeaderComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private dataService = inject(DataService)
  constructor(){}
  
  ngOnInit(): void {
    this.dataService.getData().subscribe()
  }
}
