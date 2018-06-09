import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMasterDataComponent } from './list-master-data/list-master-data.component';
import { ProductSalesDataComponent } from './product-sales-data/product-sales-data.component';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [AppComponent, ListMasterDataComponent, ProductSalesDataComponent, CreateProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Create a new Angular application using the CLI.

// The landing page should have 2 Tabs captioned; Master Data and Create Product.

// Tab – Master Data:
// Create 2 Angular Components; ListMasterData and ProductSalesData.
// The ListMasterData Component should consume the REST API in 9 (a) and display all the MasterData records.
// Each Title record should be a Link button and upon clicking the Link button should fire up
// the ProductSalesData Component which would consume API in 10 (a) and show the sales data returned.
// There should be a button next to each Link button captioned Delete.
// On clicking Delete button, consume the APIs in 9 (c) and 10 (c) which would delete the particular record from Database.

// Tab – Create Product:
// Create a Component in the Create Product tab; CreateProduct.
// Should have Input Boxes for each of the following fields. ProductId, UPC, Title, ArtistName, RelDate, SaleQty, SalesRev, UnitPrice.
// Create a Button captioned Submit.
// On clicking the Submit Button, perform the following validation and list down the errors in a bullet list.
// ProductId should be numeric field.
// UPC should be 12 digit numeric field.
// RelDate should be date field.
// SaleQty should be numeric field.
// SalesRev and UnitPrice should be decimal field.
// All the fields are mandatory.
// If there is no error after the Submit Button is clicked, call the APIs in 9 (b) and 10 (b)
// that would insert records into the respective tables.
