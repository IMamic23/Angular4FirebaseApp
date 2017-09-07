import { AppUser } from './../Models/app-user';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser

  constructor(private auth: AuthService) { 
    auth.AppUser$.subscribe(AppUser => this.appUser = AppUser);
  }

  logout() {
    this.auth.logout();
  }
}
