import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Customer } from '../Customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit{

  customer! :Customer;

  constructor(private route: ActivatedRoute,private accountservice : AccountService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const customerId = params.get('id');
      if (customerId !== null) {
        const customerIdNumber = parseInt(customerId, 10);
        if (!isNaN(customerIdNumber)) {
          this.accountservice.getCustomerDetails(customerIdNumber).subscribe((data) => {
            this.customer = data;
          });
        } 
      }
    });
  }

  onSubmit() {
      this.router.navigate(['/addAccount']);
  }
}
