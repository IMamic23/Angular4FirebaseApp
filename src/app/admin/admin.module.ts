import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminOrdersComponent } from 'app/admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from 'app/admin/components/admin-products/admin-products.component';
import { ManageUsersComponent } from 'app/admin/components/manage-users/manage-users.component';
import { ProductFormComponent } from 'app/admin/components/product-form/product-form.component';
import * as path from 'path';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { SharedModule } from './../shared/shared.module';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products/new', component: 
        ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
    ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ManageUsersComponent
  ]
})
export class AdminModule { }