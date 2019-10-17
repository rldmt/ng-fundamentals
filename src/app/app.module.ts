import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
