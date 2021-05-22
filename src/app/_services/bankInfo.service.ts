import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8084/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BankInfoService {

  constructor(private http: HttpClient) {
  }

  getAllEmployeeBank(): Observable<any> {
    return this.http.get(API_URL + 'allBankInfo');
  }

  getAllEmployerBank(): Observable<any> {
    return this.http.get(API_URL + 'employerBankList');
  }

  updateBankInfo(bankInfo): Observable<any> {
    return this.http.put(API_URL + 'bankInfo/' + bankInfo.id, {
      accountName: bankInfo.accountName,
      accountNumber: bankInfo.accountNumber,
      accountType: bankInfo.accountType,
      bankName: bankInfo.bankName,
      branchName: bankInfo.branchName,
      ownerType: bankInfo.ownerType
    }, httpOptions);
  }

  updateCompanyAccountsBalance(data): Observable<any>{
    return this.http.put(API_URL + 'updateCompanyBankBalance/' + data.accountNumber + '/' + data.balance,
      {}, httpOptions);
  }

  disburseSalary(data): Observable<any> {
    return this.http.get(API_URL + 'transferSalary/' + data.accountNumber);
  }

  getCompanyAccountBalance(accountNumber): Observable<any> {
    return this.http.get(API_URL + 'getCompanyAccountBalance/' + accountNumber);
  }

  updateBasicSalaryOfLowestGrade(data): Observable<any>{
    return this.http.put(API_URL + 'updateBasicSalaryOfLowestGrade/' + data.salary,
      {}, httpOptions);
  }

  createBankInfo(bankInfo): Observable<any> {
    return this.http.post(API_URL + 'bankInfo', {
      accountName: bankInfo.accountName,
      accountNumber: bankInfo.accountNumber,
      accountType: bankInfo.accountType,
      bankName: bankInfo.bankName,
      branchName: bankInfo.branchName,
      ownerType: bankInfo.ownerType
    }, httpOptions);
  }

}
