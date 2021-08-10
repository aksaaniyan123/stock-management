import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  id:any="";
  results="";
 
  flag=0;
  itid="";
  itname="";
  iprice="";
  istock="";
  icompany="";
 
 
  constructor(private _Activatedroute:ActivatedRoute,private dataservice:DataService,private router:Router) { }
 
  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id")
    console.log(this.id)
    
    this.dataservice.getlist()
      .subscribe((result: any) => {
 
        console.log(result)
 
        for (let elements of result['results']) {
          for (let key in elements) {
            if (key == "rows") {
              this.results = elements['rows']
              console.log(this.results)
              for(let i=0;i<this.results.length;i++)
              {
 
              }
             
 
            
            }
          }
        }
 
      })
    }
  
  
  edit(itemid:any,itemname:any,price:any,stock:any,company:any){
    console.log(itemid,itemname,price,stock,company)
    this.flag=1;
    this.itid=itemid;
    this.itname=itemname;
    this.iprice=price;
    this.istock=stock;
    this.icompany=company;
       


  }

  delete(itemid:any){
    let code=itemid
     this.dataservice.delete(code)
     .subscribe((result: any) => {

      alert("deleted succesfully")
      this.router.navigateByUrl("items")

    })
  }
  goback(){
    this.router.navigateByUrl("items")
   }
}