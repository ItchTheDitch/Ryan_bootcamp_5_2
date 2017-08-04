import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpModule } from'@angular/http';

import { APIService } from './services/api.service';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventMasterComponent } from './event-master/event-master.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventMasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
