import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from "@angular/forms";
import {PhoneNumberValidator} from '../../_helpers/phonenumber.validator';

export interface City{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  shipmentForm:FormGroup;
  submitted=false;

  cities: City[]=[  
    {value:'istanbul',viewValue:'Istanbul'},
    {value:'kocaeli',viewValue:'Kocaeli'},
    {value:'sakarya',viewValue:'Sakarya'},
  ];

  constructor(public fb:FormBuilder) { }

  ngOnInit() {
    this.shipmentForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      phonenumber:['',[Validators.required]],
      address:['',[Validators.required]],
      selectCity:['Istanbul']
    },{
      validator: PhoneNumberValidator('phonenumber')
    });
  }


  // public errorHandling=(control:string,error:string)=>{
  //     return this.myForm.controls[control].hasError(error);
  // }

  get f(){ return this.shipmentForm.controls;}

  get phonenumber(){
    return this.shipmentForm.get('phonenumber');
  }

  onSubmit(){
    this.submitted=true;

    if(this.shipmentForm.invalid){
      return;
    }

    alert('SUCCESS!! \n\n'+JSON.stringify(this.shipmentForm.value,null,4));
  }
}
