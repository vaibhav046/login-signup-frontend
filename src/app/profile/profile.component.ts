import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  @Input('userData') userData;
  constructor() { }

  ngOnInit() {
    console.log(this.userData)
  }

}
