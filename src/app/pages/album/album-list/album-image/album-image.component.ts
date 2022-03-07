import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { image } from 'src/app/shared/image.model';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-album-image',
  templateUrl: './album-image.component.html',
  styleUrls: ['./album-image.component.css'],
})
export class AlbumImageComponent implements OnInit {
  @Input() image: image = null;
  visibleModal = false;
  imageForm: image = null;
  constructor(private albumService: AlbumService) {}

  ngOnInit() {}
  delImage() {
    console.log(this.image.id);
    //this.albumService.delImage(this.image.id);
  }
  editImage(data: image) {
    this.visibleModal = true;
    this.imageForm = { ...data };
  }
  handleCancel() {
    this.visibleModal = false;
  }
}
