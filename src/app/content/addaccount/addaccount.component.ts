import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent {

  customerId: number = 0;
  initialCredit: number = 0;

  constructor(private route: ActivatedRoute,private accountservice : AccountService) { }
  onSubmit() {
    const customerId = this.customerId;
    const initialCredit = this.initialCredit;

    if (!isNaN(customerId) && !isNaN(initialCredit)) {
      this.accountservice.postAccount(customerId, initialCredit).subscribe(
        (response) => {
          // Handle the response from the POST request here
          console.log('Response:', response);
          // You can add code to handle the response data or navigate to another page, etc.
        },
        (error) => {
          // Handle errors if the POST request fails.
          console.error('Error:', error);
        }
      );
    } else {
      // Handle invalid input (non-numeric values)
      console.error('Invalid input');
    }
  }
}

