import { ProductService } from './../../services/product.service';
import { element } from 'protractor';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
    this.categories$ = categoryService.getAll();
    
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  ngOnInit() {

  }

  save(product) {
    if(this.id)
      this.productService.update(this.id, product)
    else
      this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
     
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  // doplaceholder() {
  //   let selectEle = document.querySelector("select");
  //   if(selectEle.querySelector("option:first-child").hasAttribute(':selected')) {
  //     this.placeholder_class = 'placeholder'
  //   } else {
  //     this.placeholder_class = '';
  //     selectEle.style.color = 'red';
  //   }
  // }
}
