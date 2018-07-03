import { Component, OnInit, Input } from '@angular/core';
import { Sale } from '../models/sale';
@Component({
  selector: 'app-product-sales-data',
  templateUrl: './product-sales-data.component.html',
  styleUrls: ['./product-sales-data.component.css']
})
export class ProductSalesDataComponent implements OnInit {
  @Input() saleData: Sale;

  constructor() {}

  ngOnInit() {}
}
