import { Observable } from 'rxjs/Observable';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map'

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.AppUser$
      .map(appUser => appUser.isAdmin);
  }
}
