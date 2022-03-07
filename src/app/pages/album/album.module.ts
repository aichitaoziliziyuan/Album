import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import {
  NzButtonModule,
  NzCardModule,
  NzDescriptionsModule,
  NzDropDownModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzLayoutModule,
  NzMenuModule,
  NzMessageModule,
  NzModalModule,
  NzPageHeaderModule,
  NzSelectModule,
  NzSkeletonModule,
  NzStatisticModule,
  NzTableModule,
  NzTabsModule,
  NzUploadModule,
} from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AlbumListComponent } from './album-list/album-list.component';
import { RouterModule } from '@angular/router';
import { NzListModule } from 'ng-zorro-antd/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AlbumImageComponent } from './album-list/album-image/album-image.component';
import { AlbumInfoComponent } from './album-list/album-info/album-info.component';
import { AlbumListActionComponent } from './album-list/album-list-action/album-list-action.component';
import { AlbumListModalComponent } from './album-list/album-list-modal/album-list-modal.component';
@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzStatisticModule,
    NzButtonModule,
    NzTabsModule,
    NzIconModule,
    NzMenuModule,
    NzModalModule,
    NzListModule,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzUploadModule,
    NzMessageModule,
    NzSelectModule,
    NzCheckboxModule,
    NzSkeletonModule,
    NzDropDownModule,
    NzTableModule,
    // AlbumRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumComponent,
        children: [
          { path: ':type', component: AlbumListComponent },
          //{ path: 'album-like', component: AlbumLikeComponent },
        ],
      },
    ]),
  ],
  declarations: [
    AlbumComponent,
    AlbumListComponent,
    AlbumImageComponent,
    AlbumInfoComponent,
    AlbumListActionComponent,
    AlbumListModalComponent,
  ],
})
export class AlbumModule {}
