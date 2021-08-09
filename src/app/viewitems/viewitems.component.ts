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
 
  constructor(private _Activatedroute:ActivatedRoute,private dataservice:DataService) { }
 
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
  }