import { ShoppingCart } from '../Models/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { AppUser } from './../Models/app-user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {  
  }

  async ngOnInit() {
    this.auth.AppUser$.subscribe(AppUser => this.appUser = AppUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }
}
