import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  @Input('userData') userData;
  slider: Boolean = false;
  urls: File[] = [];
  files: File[] = [];
  constructor(private uploadService: UploadService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.userData)
  }

  /**
   * File upload change event
   *
   * @param {*} event
   * @memberof ProfileComponent
   */
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event) => {
          // console.log(event.target['result']);
          this.urls.push(event.target['result']);
        }
        this.files.push(event.target.files[i]);
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  /**
   *
   *
   * @memberof ProfileComponent
   */
  upload() {
    this.uploadService.fileUpload(this.files).subscribe((x) => {
      console.log(x);
      this.router.navigateByUrl('login/slider');
      this.slider = true;
    });
  }
  showSlider(event) {
    this.slider = true;

  }

}
