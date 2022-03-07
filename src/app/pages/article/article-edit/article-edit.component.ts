import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { forkJoin, zip } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { image } from 'src/app/shared/image.model';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
})
export class ArticleEditComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  previousImageList: image[] = [];
  currentImageList: image[] = [];
  editMode = false;
  isSelect = true;
  checkd = false;
  articles: Article[] = [];
  articleId: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService,
    private dataStorageService: DataStorageService
  ) {
    this.validateForm = this.fb.group({
      id: [''],
      articleTitle: ['', [Validators.required]],
      articleContent: ['', [Validators.required]],
      images: [[]],
    });
  }

  ngOnInit(): void {
    zip(
      this.dataStorageService.fetchArticles(),
      this.dataStorageService.fetchImages(),
      this.route.params
    ).subscribe((res: any) => {
      console.log(res);
      let article: Article;

      this.articles = res[0];
      res[1].forEach((item) => {
        item['select'] = false;
      });
      this.currentImageList = res[1];
      this.articles.forEach((item: Article) => {
        if (item.id == res[2].id) {
          article = item;
        }
      });
      if (res[2].id) {
        if (article) {
          this.validateForm.setValue(article);
          this.editMode = true;
          this.checkSelect(this.currentImageList, article.images);
          this.articleId = res[2].id;
        } else {
          this.router.navigate(['article/article-management']);
        }
      }
      this.previousImageList = JSON.parse(
        JSON.stringify(this.currentImageList)
      );
    });
  }

  checkSelect(currentImageList: image[], images: image[]) {
    currentImageList.forEach((item, index) => {
      images.forEach((image) => {
        if (item.id == image.id) {
          this.currentImageList[index].select = true;
        }
      });
    });
    this.previousImageList = JSON.parse(JSON.stringify(this.currentImageList));
  }

  //获取图片 为每一项添加select属性false
  setImageList(data: image[]) {
    data.forEach((item) => {
      item['select'] = false;
    });
    this.currentImageList = data;
    //设置上一张表
    this.previousImageList = JSON.parse(JSON.stringify(this.currentImageList));
  }
  showImageModal() {
    this.isVisible = true;
  }
  handleModalCancel() {
    //取消时 将当上一张表的值赋值于当前表
    this.currentImageList = JSON.parse(JSON.stringify(this.previousImageList));
    this.onChange(this.validateForm.value.images);
    this.isVisible = false;
  }
  handleModalOk() {
    this.previousImageList = JSON.parse(JSON.stringify(this.currentImageList));
    let showImageList = [];

    this.currentImageList.forEach((item) => {
      if (item.select) {
        showImageList.push(item);
      }
    });
    this.validateForm.patchValue({ images: showImageList });
    this.isVisible = false;
  }

  onChange(value: any[]): void {
    if (value.length >= 4) {
      this.isSelect = false;
    } else {
      this.isSelect = true;
    }
  }

  submitForm(value: Article): void {
    if (this.editMode) {
      this.editArticle(value);
    } else {
      this.addArticle(value);
    }
    this.message.create('success', `Article save success`);

    setTimeout(() => {
      this.router.navigate(['article/article-management']);
    }, 1500);
  }

  resetForm(): void {
    this.validateForm.reset();
    this.setImageList(this.currentImageList);
    this.isSelect = true;
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
