import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = "https://localhost:7008/api/Account/";

  constructor(private httpClient: HttpClient) { }

  getCustomerDetails(customerId : number): Observable<Customer>{
    return this.httpClient.get<Customer>(this.url+"UserInfo/"+customerId);
  }

  postAccount(customerId : number, intialCredit: number){
    const data = { argument1: customerId, argument2: intialCredit };
    return this.httpClient.post(this.url+"Create?customerId="+customerId+"&intialCredit="+intialCredit, {
      customerId: customerId,
      intialCredit: intialCredit
    });
  }
}
