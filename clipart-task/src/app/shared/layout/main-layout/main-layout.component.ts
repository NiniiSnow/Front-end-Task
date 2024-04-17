import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    standalone: true,
    imports: [
        HeaderComponent,
        RouterModule
    ]
})
export class MainLayoutComponent {

}
