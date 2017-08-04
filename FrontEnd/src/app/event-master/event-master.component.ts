import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-event-master',
  templateUrl: './event-master.component.html',
  styleUrls: ['./event-master.component.css']
})
export class EventMasterComponent implements OnInit {

  name : string;
  price : number;
  ticket : number;
  date : string;
  eventlist:object[];

  constructor(private api:APIService) { }

  ngOnInit() {
  }

  addEvent(){
  this.api.addEvent(this.name, this.price,this.ticket,this.date)
          .subscribe(result=>this.eventlist = result);

  this.name = "";
  this.price ;
  this.ticket ;
  this.date


}

}
