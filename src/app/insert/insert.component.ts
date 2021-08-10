import { Component, OnInit } from '@angular/core';
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
  
  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  insert(){
    this.dataservice.insert(this.itemid,this.itemname,this.price,this.stock,this.company)
    .subscribe((result:any)=>{

      alert("inserted sucesfully")
      this.router.navigateByUrl("items")
    
    })
  }

}


