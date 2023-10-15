import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { AddaccountComponent } from './addaccount/addaccount.component';


const routes: Routes = [ {path : '' , component : CustomerComponent},
{ path: 'customer/:id', component: CustomerInfoComponent },
{ path: 'addAccount', component: AddaccountComponent },
{path: '**', redirectTo: ''} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }