import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../article.model';
import { ArticleManagementService } from './article-management.service';
interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.css'],
})
export class ArticleManagementComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  articleSub: Subscription;
  hGutter = 4;
  vGutter = 4;
  constructor(private articleManagementService: ArticleManagementService) {}
  ngOnDestroy(): void {
    this.articleSub.unsubscribe();
  }
  ngOnInit(): void {
    this.articleManagementService.setArticles();
    this.articleSub = this.articleManagementService.articleChange.subscribe(
      (res: Article[]) => {
        this.articles = res;
      }
    );
  }
  delArticle(id: number) {
    this.articleManagementService.delArticle(id);
  }
}
