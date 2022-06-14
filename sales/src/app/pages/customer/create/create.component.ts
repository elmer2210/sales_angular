import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerHttpService} from '../../../services/customer-http';
import { ActivatedRoute, Params } from '@angular/router';
import {CustomerModel} from '../../../models/Customer'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   customer:FormGroup = this.newCustomer;
  constructor(private customerHttpService: CustomerHttpService,
     private formBuilder: FormBuilder,
     private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.showCustomer();
  }

  get newCustomer():FormGroup{
    return this.formBuilder.group({
      _id:[null],
      c_first_name: [null, [Validators.required, Validators.maxLength(200)]],
      c_last_name: [null, [Validators.required, Validators.maxLength(200)]],
      c_phone: [null, [Validators.required, Validators.maxLength(10)]],
      c_street: [null, [Validators.required, Validators.maxLength(200)]],
      c_zip_code: [null, [Validators.required, Validators.maxLength(6)]]
    })
  }

  onSubmit() {
    if (this.customer.valid) {
      if (this.idField) {
        this.update();
      } else {
        this.store();
      }
    } else {
      this.customer.markAllAsTouched();
    }
  }
  
  store (){
    this.customerHttpService.addCustomer(this.customer.value).subscribe(
      response =>{
        this.customer.patchValue(response);
        response;
      }
    )
  }

  showCustomer(){
    this.customerHttpService.getCustomer(this.rutaActiva.snapshot.params.id).subscribe(
      customers =>{
        this.customer.patchValue(customers);
      }
    )
  }
  
  update (){
    this.customerHttpService.update(this.customer.value, this.rutaActiva.snapshot.params.id).subscribe(
      customers =>{
        this.customer.patchValue(customers);
      }
    )
  }

  get idField(){
    return this.customer.controls._id;
  }
  get cFirstNameField(){
    return this.customer.controls.c_first_name;
  }
  get cLastNameField(){
    return this.customer.controls.c_last_name;
  }
  get cPhoneField(){
    return this.customer.controls.c_phone;
  }
  get cStreetField(){
    return this.customer.controls.c_street
  }
  get cZipCodeField(){
    return this.customer.controls.c_zip_code
  }
}
