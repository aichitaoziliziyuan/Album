import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { image } from 'src/app/shared/image.model';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-album-list-action',
  templateUrl: './album-list-action.component.html',
  styleUrls: ['./album-list-action.component.css'],
})
export class AlbumListActionComponent implements OnInit {
  @Input() image: image = null;
  @Output() showEdit = new EventEmitter();
  constructor(private albumService: AlbumService) {}

  ngOnInit() {}
  delImage() {
    this.albumService.delImage(this.image.id);
  }
  isLike() {
    this.image.like = !this.image.like;
    this.albumService.editImage(this.image);
  }
  editImage() {
    this.showEdit.emit(this.image);
  }
}
