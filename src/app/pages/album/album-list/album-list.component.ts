import { Component, OnDestroy, OnInit } from '@angular/core';
import { image } from 'src/app/shared/image.model';
import { AlbumService } from '../album.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit, OnDestroy {
  imageList: image[] = [];
  layout: string = 'image';
  type: string = 'all';
  imagesSub: Subscription;
  layoutSub: Subscription;
  previewVisible = false;
  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      //获取路径传参
      this.type = params['type'];
      //获取images数据
      this.albumService.setImages();
      //this.albumService.getImages(this.type);
    });
    this.imagesSub = this.albumService.imagesChange.subscribe(
      (res: image[]) => {
        this.imageList = [];
        if (this.type == 'all') {
          this.imageList = res;
        } else {
          res.forEach((item) => {
            if (item[this.type]) {
              this.imageList.push(item);
            }
          });
        }
      }
    );
    this.layoutSub = this.albumService.layoutChanage.subscribe((res) => {
      this.layout = res;
    });
  }
  ngOnDestroy(): void {
    this.imagesSub.unsubscribe();
    this.layoutSub.unsubscribe();
  }
}
