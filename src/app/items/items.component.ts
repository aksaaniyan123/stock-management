import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  flag=0;
  itcode="";
  
  result:any[]=[];
  

//   itemDetail: any = [
//     { code:1000, name: "pen" },
//     { code:1001, name: "pencil"  },
//     {code:1002,  name: "bag"  },
//    { code:1003, name: "eraser" },
//    { code:1004, name: "laptop"}
  
//  ]

  constructor(private router: Router,private dataservice:DataService) { }

  ngOnInit(): void {
    console.log(this.result)
    this.dataservice.getlist()
      .subscribe((result: any) => {
 
        console.log(result)
 
        for (let elements of result['results']) {
          for (let key in elements) {
            if (key == "rows") {
              this.result = elements['rows']
              console.log(this.result)
             
 
            
            }
          }
        }
 
      })
  }
  // view(code:any){
  //   this.flag=1;
  //   var tcode:any=code;
  //   console.log(tcode);
  //   this.itcode=tcode;

  // }
  // // showdata(){
  //   this.dataservice.showdata()
  //   .subscribe((result:any)=>{
      
  //     this.html_data=result.response['#result-set-1'];
  //     console.log(result);
      
  //   })
  }
 

