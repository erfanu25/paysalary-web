import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../_services/employee.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  form: any = {};
  accounts: SelectItem[] = [{ label: 'Select an Account', value: null }];
  id: string;
  isSuccessful = false;
  isUpdateSuccessful = false;
  errorMessage = '';

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = location.pathname.split('/')[2];

    this.route.queryParams.subscribe(queryParams => {
      this.form.accountNumber = queryParams.accountNumber;
      this.form.address = queryParams.address;
      this.form.employeeId = queryParams.employeeId;
      this.form.gradeNo = queryParams.gradeNo;
      this.form.mobileNo = queryParams.mobileNo;
      this.form.name = queryParams.name;
    });

    this.employeeService.getAllEmployeeBankAccount().subscribe(
      data => {
        this.accounts = [...this.accounts].concat(data.map(source => {
          return ({
            label: source.accountNumber,
            value: source.accountNumber
          });
        }));
      });
  }

  onSubmit() {
    if (!this.id) {
      if (this.form.accountNumber) {
        this.employeeService.createEmployee(this.form).subscribe(
          data => {
            this.isSuccessful = true;
          },
          err => {
            this.errorMessage = err.error;
          }
        );
      }
    } else {
      this.form.id = this.id;
      this.employeeService.updateEmployee(this.form).subscribe(
        data => {
        },
        err => {
          this.errorMessage = err.error.text;
          this.isUpdateSuccessful = true;
        });
    }
  }
}
