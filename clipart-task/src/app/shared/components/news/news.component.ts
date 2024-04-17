import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    standalone: true
})
export class NewsComponent {
  @Input() hours:string;
  @Input() date:string;
  @Input() description:string;
}
