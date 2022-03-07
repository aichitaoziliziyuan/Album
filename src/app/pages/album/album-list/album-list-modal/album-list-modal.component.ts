import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { image } from 'src/app/shared/image.model';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-album-list-modal',
  templateUrl: './album-list-modal.component.html',
  styleUrls: ['./album-list-modal.component.css'],
})
export class AlbumListModalComponent implements OnInit {
  @Input() isShowModal: boolean = false;
  @Input() imageForm: image = null;
  @Output() colse = new EventEmitter
  constructor(private albumService: AlbumService) {}

  ngOnInit() {}
  onCancel() {
    this.colse.emit();
  }
  submitForm(data: image) {
    this.imageForm.imageName = data.imageName;
    this.imageForm.type = data.type;
    this.albumService.editImage(this.imageForm);
    this.onCancel();
  }
}
