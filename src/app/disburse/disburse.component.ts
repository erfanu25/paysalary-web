import { Component, OnInit } from '@angular/core';
import {BankInfoService} from '../_services/bankInfo.service';
import {Router} from '@angular/router';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-disburse',
  templateUrl: './disburse.component.html',
  styleUrls: ['./disburse.component.css']
})
export class DisburseComponent implements OnInit {
  content = '';
  form: any = {};
  bankInfos: any[];
  accountBalance = 0;
  accounts: SelectItem[] = [{ label: 'Select an Account', value: null }];
  isSuccessful = false;
  isBasicSuccessful = false;
  errorMessage = '';
  basicMessage = '';

  constructor(private router: Router,
              private bankInfoService: BankInfoService) { }

  ngOnInit() {

    this.bankInfoService.getAllEmployerBank().subscribe(
      data => {
        this.accounts = [...this.accounts].concat(data.map(source => {
          return ({
            label: source.accountNumber,
            value: source.accountNumber
          });
        }));
      });
  }

  onBalanceSubmit() {
    if (this.form.accountNumber && this.form.balance) {
      this.bankInfoService.updateCompanyAccountsBalance(this.form).subscribe(
        data => {
          this.form.balance = 0;
          this.form.accountNumber = null;
          this.accountBalance = 0;
        },
        err => {
          this.errorMessage = err.error.text;
          this.isSuccessful = true;
          this.form.balance = 0;
          this.form.accountNumber = null;
          this.accountBalance = 0;
        });
    }
  }

  salaryDisburse() {
    if (this.form.accountNumber) {
      this.bankInfoService.disburseSalary(this.form).subscribe(
        data => {
          this.isSuccessful = true;
          this.errorMessage = data;
          this.form.accountNumber = null;
        },
        err => {
          this.errorMessage = err.error.message;
          this.form.accountNumber = null;
        });
    }
  }

  onBasicSalarySubmit() {
    if (this.form.salary) {
      this.bankInfoService.updateBasicSalaryOfLowestGrade(this.form).subscribe(
        data => {
          this.form.salary = null;
        },
        err => {
          this.basicMessage = err.error.text;
          this.isBasicSuccessful = true;
          this.form.salary = null;
        });
    }
  }

  getBalance(event) {
    console.log(event);
    this.bankInfoService.getCompanyAccountBalance(event).subscribe(
      data => {
        this.accountBalance = data;
      },
      err => {

      });
  }


}
