import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { zip } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { image } from 'src/app/shared/image.model';
import { Article } from '../article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleEditService {
  constructor(
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute
  ) {}
  articles: Article[] = [];
  articleId: number;
  imageListChange = new Subject<any>();
  articleChange = new Subject<any>();
  setArticles() {
    this.dataStorageService.fetchArticles().subscribe((res: Article[]) => {
      this.articles = res;
    });
  }
  getData() {
    let article: Article;
    debugger
    zip(
      this.dataStorageService.fetchArticles(),
      this.dataStorageService.fetchImages(),
      this.route.params
    ).subscribe((res: any) => {
      console.log(this.route)
      console.log(res);
      this.articles = res[0];
      res[1].forEach((item) => {
        item['select'] = false;
      });
      this.imageListChange.next(res[1]);
      //this.currentImageList = res[1];

      if (res[2].id) {
        this.articles.forEach((item: Article) => {
          if (item.id == res[2].id) {
            // this.validateForm.setValue(item);
            // this.editMode = true;
            // this.checkSelect(this.currentImageList, item.images);
            this.articleChange.next(item);
          }
        });
        this.articleId = res[2].id;
      }
    });
  }

  addArticle(data: Article) {
    data['id'] = this.articles.length + 1;
    this.articles.push(data);
    this.dataStorageService.saveArticles(this.articles);
  }
  editArticle(data: Article) {
    this.articles.forEach((item, index) => {
      if (item.id === data.id) {
        this.articles[index] = data;
      }
    });
    this.dataStorageService.saveArticles(this.articles);
  }
}
