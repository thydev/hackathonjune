import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-list-master-data',
  templateUrl: './list-master-data.component.html',
  styleUrls: ['./list-master-data.component.css']
})
export class ListMasterDataComponent implements OnInit {
  masters: any;
  selectedSaleData: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    const obsItem = this._httpService.getAllMasterData();
    obsItem.subscribe(data => {
      this.masters = data['data'];
    });
  }

  onDeleteYes(item: any): void {
    const obsItem = this._httpService.deleteMaster(item.ProductId);
    obsItem.subscribe(data => {
      if (data['message'] === 'Success') {
        // Delete SalesData
        console.log(item);
        const obsSale = this._httpService.deleteSale(item.ProductId);
        obsSale.subscribe(saleData => {
          if (saleData['message'] === 'Success') {
            this.getAll();
          }
        });
      }
    });
  }

  showSaleData(item: any): void {
    // console.log(item);
    const obsItem = this._httpService.getSaleProductionId(item.ProductId);
    obsItem.subscribe(data => {
      this.selectedSaleData = data['data'][0];
      console.log(data);
    });
  }
}
