import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { RouterModule } from '@angular/router';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzGridModule,
  NzIconModule,
  NzLayoutModule,
  NzListModule,
  NzMessageModule,
  NzModalModule,
  NzPageHeaderModule,
  NzSkeletonModule,
  NzSliderModule,
} from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ImageLayoutPipe } from 'src/app/shared/imageLayout.pipe';
@NgModule({
  imports: [
    ArticleRoutingModule,
    NzSkeletonModule,
    NzButtonModule,

    NzGridModule,
    NzSliderModule,
    CommonModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzListModule,
    NzButtonModule,
    NzIconModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzMessageModule,
  ],
  declarations: [
    ArticleComponent,
    ArticleEditComponent,
    ArticleManagementComponent,
    ArticleReadComponent,
    ImageLayoutPipe
  ],
})
export class ArticleModule {}
