export interface Fact {
    id:number,
    imageUrl:string,
    description:string
}
export interface PopularNews {
    id:number,
    imageUrl:string,
    description:string
}
export interface News {
    id:number,
    date:string,
    description:string
}
export interface Article {
    id:number,
    imageUrl:string,
    description:string
}
export interface Slide {
    id:number,
    date:string,
    category:string,
    imageUrl:string,
    title:string,
    description:string
}
export interface Category {
    id:number,
    name:string,
}