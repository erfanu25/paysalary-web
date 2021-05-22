import { Component, OnInit } from '@angular/core';
import {BankInfoService} from '../_services/bankInfo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './bankInfo-list.component.html'
})
export class BankInfoListComponent implements OnInit {
  content = '';
  bankInfos: any[];

  constructor(private router: Router,
              private bankInfoService: BankInfoService) { }

  ngOnInit() {

    this.bankInfoService.getAllEmployeeBank().subscribe(
      data => {
        this.bankInfos = data;
      });
  }

  editProduct(bank) {
    this.router.navigate(['updateBank', bank.id], {
      queryParams: { accountName: bank.accountName,
        accountNumber: bank.accountNumber,
        accountType: bank.accountType,
        bankName: bank.bankName,
        branchName: bank.branchName,
        ownerType: bank.ownerType,
      }
    });
  }
}
