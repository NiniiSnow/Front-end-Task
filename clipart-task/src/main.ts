import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './app/shared/layout/main-layout/main-layout.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './app/pages/home/home.component';

const routes: Routes = [
    {
      path:'',
      component:MainLayoutComponent,
      children:[
        {
          path:'',component:HomeComponent,
        }
      ]
    }
  ];

  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        RouterModule.forRoot(routes),
        HttpClientModule  
      )
    ]
  }).catch(err => console.error(err));