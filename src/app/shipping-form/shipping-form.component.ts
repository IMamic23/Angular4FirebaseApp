import { ShoppingCart } from './../Models/shopping-cart';
import { OrderService } from './../order.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;
  
  constructor(    
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$
      .subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  } 

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
