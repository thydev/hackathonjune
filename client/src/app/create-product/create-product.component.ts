import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product = {
    ProductId: '',
    UPC: '',
    Title: '',
    ArtistName: '',
    RelDate: '',
    SaleQty: '',
    SalesRev: '',
    UnitPrice: ''
  };
  message = '';
  errors: any;
  constructor(private _httpServie: HttpService, private _router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const obsItem = this._httpServie.createMaster(this.product);
    obsItem.subscribe(data => {
      // console.log(data);
      this.message = data['message'];
      if (data['message'] === 'Success') {
        this.message = ': ' + this.product.ProductId + ' was added!';
        const saleObs = this._httpServie.createSale(this.product);
        saleObs.subscribe(saleData => {
          if (saleData['message'] === 'Success') {
            this.goHome();
          } else {
            this.errors = saleData['error'].errors;
          }
        });
      } else {
        console.log(data['error'].errors);
        this.errors = {
          name: '',
          pettype: '',
          description: ''
        };
        this.errors = data['error'].errors;
        // if (data['error'].errors['name']) {
        //   this.errors.name = data['error'].errors['name'];
        // }
        // if (data['error'].errors['pettype']) {
        //   this.errors.pettype = data['error'].errors['pettype'];
        // }
        // if (data['error'].errors['description']) {
        //   this.errors.description = data['error'].errors['description'];
        // }
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
