import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
    standalone: true,
    imports:[CommonModule]
})
export class ArticlesComponent {
  // @Input() data:any;
}
