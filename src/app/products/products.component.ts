import { Product } from './../Models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(
      private productService: ProductService, 
      private route: ActivatedRoute) {

    productService.getAll().switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    }).subscribe(params => {
        this.category = params.get('category');
  
        this.filteredProducts = (this.category) ? 
          this.products.filter(p => p.category === this.category) :
          this.products;
      });

    
    
   }

  ngOnInit() {
  }

}
