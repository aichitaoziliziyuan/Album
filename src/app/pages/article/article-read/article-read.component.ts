import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { zip } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css'],
})
export class ArticleReadComponent implements OnInit, AfterContentChecked {
  article: Article = {
    id: null,
    articleTitle: '',
    articleContent: '',
    images: []
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}
  ngAfterContentChecked(): void {}

  ngOnInit() {
    zip(this.dataStorageService.fetchArticles(), this.route.params).subscribe(
      (res: any) => {
        res[0].forEach((item) => {
          if (item.id == res[1].id) {
            this.article = item;
          }
        });

        if (!(this.article && res[1].id)) {
          this.router.navigate(['article/article-management']);
        }
      }
    );
  }
}
