import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BankInfoService} from '../_services/bankInfo.service';

@Component({
  selector: 'app-product',
  templateUrl: './bankInfo.component.html',
  styleUrls: ['./bankInfo.component.css']
})
export class BankInfoComponent implements OnInit {
  form: any = {};
  id: string;
  isSuccessful = false;
  isUpdateSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private bankInfoService: BankInfoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = location.pathname.split('/')[2];

    this.route.queryParams.subscribe(queryParams => {
      this.form.accountName = queryParams.accountName;
      this.form.accountNumber = queryParams.accountNumber;
      this.form.accountType = queryParams.accountType;
      this.form.bankName = queryParams.bankName;
      this.form.branchName = queryParams.branchName;
      this.form.ownerType = queryParams.ownerType;
    });
  }

  onSubmit() {
    this.form.createDate = new Date();
    if (!this.id) {
      this.bankInfoService.createBankInfo(this.form).subscribe(
        data => {
          this.isSuccessful = true;
        },
        err => {
            this.errorMessage = err.error;
        }
      );
    } else {
      this.form.id = this.id;
      this.bankInfoService.updateBankInfo(this.form).subscribe(
        data => {
        },
        err => {
          this.errorMessage = err.error.text;
          this.isUpdateSuccessful = true;
        });
    }
  }
}
