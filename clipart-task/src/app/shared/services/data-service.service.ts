import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Article, Category, Fact, News, PopularNews, Slide } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string ='assets/data.json'
  constructor(
    private http:HttpClient
  ) { }

  public getData():Observable<any>{
    return this.http.get(this.url)
  }
  public getArticles():Observable<Article[]>{
    return this.http.get(this.url).pipe(map((data:any) => data.articles))
  }
  public getNews():Observable<News[]>{
    return this.http.get(this.url).pipe(map((data:any) => data.news))
  }
  public getPopularNews():Observable<PopularNews[]>{
    return this.http.get(this.url).pipe(map((data:any) => data.popularNews))
  }
  public getFacts():Observable<Fact[]>{
    return this.http.get(this.url).pipe(map((data:any) => data.facts))
  }
  public getSlides():Observable<Slide[]>{
    return this.http.get(this.url).pipe(map((data:any) => data.slides))
  }
  public getCategories():Observable<Category[]>{
    return this.http.get(this.url).pipe(map((data:any) => data.categories))
  }
}
