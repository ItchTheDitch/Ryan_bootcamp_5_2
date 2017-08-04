import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIService {

  constructor(private http:Http) { }



  getEventlist(){

    return this.http.get('http://localhost:8000/api/eventlist')
    .map(result => result.json());
  }

  addEvent(name:string, price:number,ticket:number, date:string){

    let data = {
      "name" : name,
      "price" : price,
      "ticket" : ticket,
      "date" : date
  }


  let body = JSON.stringify(data);
  let headers = new Headers({"Content-type": "application/json"});
  let option = new RequestOptions({headers: headers});

  return this.http.post('http://localhost:8000/api/eventlist/add',body,option)
  .map(result => result.json());
}

}
