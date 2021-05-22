import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { BankInfoListComponent } from './bankInfo-list/bankInfo-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {BankInfoComponent} from './bankInfo/bankInfo.component';
import {DisburseComponent} from './disburse/disburse.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'disburse', component: DisburseComponent },
  { path: 'addEmployee', component: EmployeeComponent },
  { path: 'updateEmployee/:id', component: EmployeeComponent },
  { path: 'addBankInfo', component: BankInfoComponent },
  { path: 'updateBank/:id', component: BankInfoComponent },
  { path: 'bankAccounts', component: BankInfoListComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
