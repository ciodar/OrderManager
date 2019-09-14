import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  USER_ENDPOINT = 'http://localhost:3000/customers';
  constructor(readonly http: HttpClient) { }

  returnCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.USER_ENDPOINT);
  }
  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.USER_ENDPOINT}/${customer.id}`, customer);
  }

}
