import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BankInfoListComponent } from './bankInfo-list/bankInfo-list.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {BankInfoComponent} from './bankInfo/bankInfo.component';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DisburseComponent } from './disburse/disburse.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    EmployeeListComponent,
    BankInfoListComponent,
    BankInfoComponent,
    DisburseComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
