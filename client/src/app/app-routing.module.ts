import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListMasterDataComponent } from './list-master-data/list-master-data.component';
import { ProductSalesDataComponent } from './product-sales-data/product-sales-data.component';
const routes: Routes = [
  { path: 'masters/list', component: ListMasterDataComponent },
  { path: 'create', component: CreateProductComponent },
  { path: '', pathMatch: 'full', redirectTo: '/masters/list' },
  { path: '**', component: ListMasterDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
