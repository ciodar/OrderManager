import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(readonly customerService: CustomersService) {
  }

  ngOnInit() {
    console.log(this.customerService);
    this.customerService.returnCustomers().subscribe( customers =>
      this.customers = customers
    );
  }

}
