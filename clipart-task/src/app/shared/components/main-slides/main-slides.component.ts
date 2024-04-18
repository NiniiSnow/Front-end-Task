import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/models';

@Component({
    selector: 'app-main-slides',
    templateUrl: './main-slides.component.html',
    styleUrls: ['./main-slides.component.scss'],
    standalone: true,
    imports:[CommonModule]
})
export class MainSlidesComponent {
    @Input() data:Slide;
}
