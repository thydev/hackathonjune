import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { Sale } from '../models/sale';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product;
  sale: Sale;
  message = '';
  errors: any;
  constructor(private _httpServie: HttpService, private _router: Router) {}

  ngOnInit() {
    this.product = new Product();
    this.sale = new Sale();
  }

  onSubmit() {
    // Save product
    const obsItem = this._httpServie.createMaster(this.product);
    obsItem.subscribe(data => {
      // console.log(data);
      this.message = data['message'];
      if (data['message'] === 'Success') {
        this.message = ': ' + this.product.ProductId + ' was added!';

        // Save sale data
        this.sale.ProductId = this.product.ProductId;
        const saleObs = this._httpServie.createSale(this.sale);
        saleObs.subscribe(saleData => {
          if (saleData['message'] === 'Success') {
            this.goHome();
          } else {
            this.errors = saleData['error'].errors;
          }
        });
      } else {
        console.log(data['error'].errors);
        this.errors = data['error'].errors;
      }
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }
}

// validation and list down the errors in a bullet list.
// ProductId should be numeric field.
// UPC should be 12 digit numeric field.
// RelDate should be date field.
// SaleQty should be numeric field.
// SalesRev and UnitPrice should be decimal field.
// All the fields are mandatory.
