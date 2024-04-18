import { Component, Input } from '@angular/core';
import { PopularNews } from '../../models/models';

@Component({
    selector: 'app-popular-news',
    templateUrl: './popular-news.component.html',
    styleUrls: ['./popular-news.component.scss'],
    standalone: true
})
export class PopularNewsComponent {
  @Input() data:PopularNews;
}
