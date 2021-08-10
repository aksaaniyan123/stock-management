import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() itemid:string | null | undefined 
  @Input() itemname:string | null | undefined 
  @Input() price:string | null | undefined 
  @Input() stock:string | null | undefined 
  @Input() company:string | null | undefined 

  iemid: any="";
  iemname:any="";
  iemprice:any="";
  iemstock:any="";
  iemcompany:any="";

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.iemid=this.itemid
    this.iemname=this.itemname
    this.iemprice=this.price
    this.iemstock=this.stock
    this.iemcompany=this.company
  }

  update(){
    let id1=this.iemid;
    let name1=this.iemname;
    let price1=this.iemprice;
    let stock1=this.iemstock;
    let company1=this.iemcompany;
    this.dataservice.update(id1,name1,price1,stock1,company1)
    .subscribe((result:any)=>{
      alert("updated successfully")
    })

    
  }

}
