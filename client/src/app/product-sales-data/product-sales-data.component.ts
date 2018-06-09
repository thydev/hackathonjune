import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-sales-data',
  templateUrl: './product-sales-data.component.html',
  styleUrls: ['./product-sales-data.component.css']
})
export class ProductSalesDataComponent implements OnInit {
  @Input() saleData: any;

  constructor() {}

  ngOnInit() {}
}
