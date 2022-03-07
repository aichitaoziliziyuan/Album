import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { image } from 'src/app/shared/image.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  layoutChanage = new Subject<string>();
  images: image[];
  imagesChange = new Subject<image[]>();
  constructor(private dataStorageService: DataStorageService) {}
  setImages() {
    this.dataStorageService.fetchImages().subscribe((res: image[]) => {
      this.images = res;
      this.imagesChange.next(this.images.slice());
    });
  }
  delImage(id: number) {
    this.images.forEach((item, index) => {
      if (item.id === id) {
        this.images.splice(index, 1);
      }
    });
    this.saveImageList();
  }
  addImage(data: image) {
    this.images.push(data);
    this.saveImageList();
  }
  editImage(data: image) {
    this.images.forEach((item, index) => {
      if (item.id === data.id) {
        this.images[index] = data;
      }
    });
    this.saveImageList();
  }
  saveImageList() {
    this.imagesChange.next(this.images.slice());
    this.dataStorageService.saveImages(this.images);
  }
}
