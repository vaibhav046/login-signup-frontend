import { Component, OnInit } from '@angular/core';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  items: Object[] = [];

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.uploadService.fileDownload().subscribe((files) => {
      files.map((file) => {
        console.log(file);
        this.items.push({
          name: 'http://localhost:3000/' + file.name,
          type: file.type,
        });
      });

    });
  }

}
