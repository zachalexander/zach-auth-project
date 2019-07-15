import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  updateUsername() {
    this.auth.updateUsername(this.userForm.value[''])
  }

}
