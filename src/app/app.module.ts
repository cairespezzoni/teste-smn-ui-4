import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SMNUI4Module } from 'smn-ui-v4';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SMNUI4Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
