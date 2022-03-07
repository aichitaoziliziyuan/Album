import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ArticleComponent } from './article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: 'article-management',
        component: ArticleManagementComponent,
      },
      {
        path: 'article-edit',
        component: ArticleEditComponent,
      },
      {
        path: ':id/edit',
        component: ArticleEditComponent,
      },
      {
        path: ':id',
        component: ArticleReadComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
