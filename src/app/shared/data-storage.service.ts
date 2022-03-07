import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../pages/article/article.model';
import { image } from './image.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private baseUrl = `https://album-54a2b-default-rtdb.firebaseio.com/`;
  constructor(private http: HttpClient) {}
  //将数据上传到firebase
  saveImages(images: image[]) {
    this.http.put(this.baseUrl+'album.json', images).subscribe((response) => {
      console.log(response);
    });
  }
  //从firebase获取数据
  fetchImages() {
    return this.http.get(this.baseUrl+'album.json');
  }
  saveArticles(article:Article[]){
    this.http.put(this.baseUrl+'article.json', article).subscribe((response) => {
      console.log(response);
    });
  }
  fetchArticles() {
    return this.http.get(this.baseUrl+'article.json');
  }
}
