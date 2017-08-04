import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  // name : string;
  // price : number;
  // ticket : number;
  eventlist:object[];

  constructor(private api:APIService) { }

  ngOnInit() {

    this.api.getEventlist()
            .subscribe(result=>this.eventlist = result);
  }

}
