import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
 


itemid="";
itemname="";
price="";
stock="";
company="";


insertForm = this.fb.group({
  
  itemid: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  itemname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  price: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  stock: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  company: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

})
  
  constructor(private router:Router,private dataservice:DataService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  insert(){
   
      if (this.insertForm.valid) {
        var itemid1 = this.insertForm.value.itemid;
        var itemname1 = this.insertForm.value.itemname;
        var price1= this.insertForm.value.price;
        var stock1 = this.insertForm.value.stock;
        var company1 = this.insertForm.value.company;
        console.log(itemid1,itemname1,price1,stock1,company1);
        
    this.dataservice.insert(itemid1,itemname1,price1,stock1,company1)
    .subscribe((result:any)=>{

      alert("inserted sucesfully")
      this.router.navigateByUrl("items")
    
    })
  }

}

}
