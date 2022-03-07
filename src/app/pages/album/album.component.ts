import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { image } from 'src/app/shared/image.model';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  isVisible = false;
  imageForm: FormGroup;
  constructor(private fb: FormBuilder, private albumService: AlbumService) {}

  ngOnInit() {
    this.imageForm = this.fb.group({
      imageName: ['', [Validators.required]],
      type: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],
      like: [false],
    });
  }

  showModal() {
    this.isVisible = true;
    //patchValue设置某个FormControl的值
    this.imageForm.patchValue({ like: false });
  }
  handleCancel() {
    this.isVisible = false;
    this.imageForm.reset();
  }
  handleAdd(data: image) {
    console.log(data);
    this.albumService.addImage(data);

    this.handleCancel();
  }
  changeLayout(layout: string) {
    this.albumService.layoutChanage.next(layout);
  }
}
