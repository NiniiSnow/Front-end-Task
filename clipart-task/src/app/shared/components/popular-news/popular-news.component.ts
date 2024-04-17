import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-popular-news',
    templateUrl: './popular-news.component.html',
    styleUrls: ['./popular-news.component.scss'],
    standalone: true
})
export class PopularNewsComponent {
  @Input() imgUrl:string;
  @Input() description:string;
}
