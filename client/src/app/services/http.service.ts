import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private config = {
    baseUrl: 'http://localhost:5000/api/',
    masterUrl: 'masters/',
    saleUrl: 'sales/'
  };
  product: any = [];
  productChange: Subject<any> = new Subject<any>();

  constructor(private _http: HttpClient) {}

  getAllMasterData() {
    return this._http.get(this.config.baseUrl + this.config.masterUrl);
  }

  createMaster(item: any) {
    return this._http.post(this.config.baseUrl + this.config.masterUrl, item);
  }

  deleteMaster(ProductId: String) {
    return this._http.delete(
      // this.config.baseUrl + this.config.masterUrl + ProductId
      this.config.baseUrl + this.config.masterUrl + 'products/' + ProductId
    );
  }

  updateMaster(item: any) {
    return this._http.post(
      this.config.baseUrl + this.config.masterUrl + item.id,
      item
    );
  }

  getAllSaleData() {
    return this._http.get(this.config.baseUrl + this.config.saleUrl);
  }

  getSaleProductionId(productId: String) {
    return this._http.get(
      this.config.baseUrl + this.config.saleUrl + 'products/' + productId
    );
  }

  createSale(item: any) {
    return this._http.post(this.config.baseUrl + this.config.saleUrl, item);
  }

  deleteSale(productId: String) {
    return this._http.delete(
      this.config.baseUrl + this.config.saleUrl + 'products/' + productId
    );
  }

  updateSale(item: any) {
    return this._http.post(
      this.config.baseUrl + this.config.saleUrl + item.id,
      item
    );
  }
}
