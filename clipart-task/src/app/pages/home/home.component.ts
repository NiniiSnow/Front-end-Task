import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from 'src/app/shared/services/data-service.service';
import { MainSlidesComponent } from 'src/app/shared/components/main-slides/main-slides.component';
import { SwiperContainer } from 'swiper/element';
import { Observable } from 'rxjs';
import { Article, Fact, News, PopularNews, Slide } from 'src/app/shared/models/models';
import { NewsComponent } from 'src/app/shared/components/news/news.component';
import { PopularNewsComponent } from 'src/app/shared/components/popular-news/popular-news.component';
import { ArticlesComponent } from 'src/app/shared/components/articles/articles.component';
import { FactsComponent } from 'src/app/shared/components/facts/facts.component';

const COMPONENTS = [
  NewsComponent,
  MainSlidesComponent,
  PopularNewsComponent,
  ArticlesComponent,
  FactsComponent
]

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[
    CommonModule,
    COMPONENTS
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiper!:ElementRef;
  private dataService = inject(DataService);
  public slides$:Observable<Slide[]>;
  public news$:Observable<News[]>;
  public facts$:Observable<Fact[]>;
  public popularNews$:Observable<PopularNews[]>;
  public articles$:Observable<Article[]>;

  constructor(){}
  
  ngOnInit(): void {
    this.getSlides();
    this.getNews();
    this.getFacts();
    this.getArticles();
    this.getPopularNews();
  }

  public getSlides(){
    this.slides$ =  this.dataService.getSlides()
  }

  public getNews(){
    this.news$ =  this.dataService.getNews()
  }

  public getFacts(){
    this.facts$ =  this.dataService.getFacts()
  }

  public getArticles(){
    this.articles$ =  this.dataService.getArticles()
  }

  public getPopularNews(){
    this.popularNews$ =  this.dataService.getPopularNews()
  }


  ngAfterViewInit(): void {
    console.log(this.swiper.nativeElement)
  }

}
