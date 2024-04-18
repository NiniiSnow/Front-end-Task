import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data-service.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/models';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent implements OnInit{
  private dataService = inject(DataService);
  public categories$:Observable<Category[]>;

  ngOnInit(): void {
    this.categories$ = this.dataService.getCategories()
  }
}
