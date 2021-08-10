import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  
  constructor(private http:HttpClient) { }
//   itemsDetail = [
//     { code:1000,name:"Pen",companyname:"Cello",quantity:2,amount:15},
//     { code:1001, name:"Pencil",companyname:"Apsara" ,unit:3,quantity:8,amount:150},
//     {code:1002,name:"Bag",companyname:"Nike",quantity:3,amount:5000},
//    { code:1003,name:"Eraser",companyname:"Nataraj",quantity:1,amount:125 },
//    { code:1004, name:"Laptop",companyname:"HP",quantity:1,amount:55500 }
  
//  ]
 insert(itemid:any,itemname:any,price:any,stock:any,company:any){
  let data=
  {
    "batchStatus": "false",
    "detailArray":
    [{
                 "Flag":"Insert",
                "ItemId":itemid,
                "ItemName":itemname,
                "Price":price,
                "Stock":stock,
                "Company":company,


    }],
                 "dbConn": "db5",
                 "requestId": "600602",
                 "outTblCount": "0"
    
  }
  
return this.http.post(environment.URL,data)
}
  getlist(){
    let data={
      "batchStatus": "false",
"detailArray":
[{
             "Flag":"View"
}],
             "dbConn": "db5",
             "requestId": "600602",
             "outTblCount": "0"

      }

return this.http.post (environment.URL,data)

}
delete(itemid:any){
  
  let data={
    "batchStatus": "false",
    "detailArray":
    [{
                 "Flag":"Delete",
                 "ItemId":itemid,
    }],
                 "dbConn": "db5",
                 "requestId": "600602",
                 "outTblCount": "0"
  }

  return this.http.post(environment.URL,data)
}

update(itemid:any,itemname:any,price:any,stock:any,company:any){
   
  let data={
    "batchStatus": "false",
    "detailArray":
    [{
                 "Flag":"update",
                 "ItemId":itemid,
                 "ItemName":itemname,
                 "Price":price,
                 "Stock":stock,
                 "Company":company,
                }],
                "dbConn": "db5",
                "requestId": "600602",
                "outTblCount": "0"
 
  }

  return this.http.post(environment.URL,data)


}
}
