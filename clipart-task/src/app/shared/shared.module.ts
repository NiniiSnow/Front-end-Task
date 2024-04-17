import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PopularNewsComponent } from './components/popular-news/popular-news.component';
import { NewsComponent } from './components/news/news.component';
import { FactsComponent } from './components/facts/facts.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MainSlidesComponent } from './components/main-slides/main-slides.component';

const COMPONENTS = [
    HeaderComponent,
    MainLayoutComponent,
    SearchInputComponent,
    PopularNewsComponent,
    NewsComponent,
    FactsComponent,
    ArticlesComponent,
    MainSlidesComponent
]
// const DIRECTIVES =[]

@NgModule({
    declarations: [COMPONENTS],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [COMPONENTS],
  })
  export class SharedModule { }
  
