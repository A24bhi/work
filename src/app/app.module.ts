import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PersonalDetailsTableComponent } from './personal-details-table/personal-details-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
