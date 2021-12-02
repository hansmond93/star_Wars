import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkColumnDef, CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PeopleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
