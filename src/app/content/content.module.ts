import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { ContentRoutingModule } from './content-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerInfoComponent,
    AddaccountComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class ContentModule { }
