import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  constructor(private router: Router) {}

  onSubmit(customerIdInput: HTMLInputElement) {
    const customerId = parseInt(customerIdInput.value, 10);
    if (!isNaN(customerId)) {
      this.router.navigate(['/customer', customerId]);
    } 
  }
}
