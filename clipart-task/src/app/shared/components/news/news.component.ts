import { Component, Input } from '@angular/core';
import { News } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    standalone: true,
    imports:[CommonModule]
})
export class NewsComponent {
  @Input() data:News;

}
