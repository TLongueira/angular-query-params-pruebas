import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SearchComponent} from './app-search.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
