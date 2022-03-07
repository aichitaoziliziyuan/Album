import { Component, Input, OnInit } from '@angular/core';
import { image } from 'src/app/shared/image.model';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.css'],
})
export class AlbumInfoComponent implements OnInit {
  @Input() image: image = null;
  imageForm: image = null;
  visibleModal = false;
  constructor() {}

  ngOnInit() {}
  editImage(data: image) {
    this.visibleModal = true;
    this.imageForm = { ...data };
    console.log(data);
  }
  handleCancel() {
    this.visibleModal = false;
  }
}
