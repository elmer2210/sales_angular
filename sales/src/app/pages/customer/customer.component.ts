import { Component, OnInit } from '@angular/core';
import {CustomerHttpService} from '../../services/customer-http';
import {CustomerModel} from '../../models/Customer'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:CustomerModel
  constructor(private customerHttpService: CustomerHttpService) { }

  ngOnInit(): void {
    this.showCustomers();
  }

  showCustomers(){
    this.customerHttpService.getAllCustomers().subscribe(
      customers =>{
        this.customers = customers;
      }
    )
  }

}
