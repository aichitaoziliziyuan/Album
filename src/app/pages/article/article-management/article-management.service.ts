import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Article } from '../article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleManagementService {
  constructor(private dataStorageService: DataStorageService) {}
  articleChange = new Subject<any>();
  articles: Article[] = [];
  setArticles() {
    this.dataStorageService.fetchArticles().subscribe((res: Article[]) => {
      if (res == null) {
        this.articles = [];
      } else {
        this.articles = res;
      }
      this.articleChange.next(this.articles.slice());
    });
  }

  delArticle(id: number) {
    this.articles.forEach((item, index) => {
      if (item.id === id) {
        this.articles.splice(index, 1);
      }
    });
    this.articleChange.next(this.articles.slice());
  }
}
