import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../_services/employee.service';
import {RULE} from '../_services/rule_enum.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  content = '';
  employees: any[];
  rule = RULE;

  constructor(private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe(
      data => {
        this.employees = data;
      });
  }

  editEmployee(employee) {
    this.router.navigate(['updateEmployee', employee.id], {
      queryParams: { accountNumber: employee.accountNumber,
        address: employee.address,
        employeeId: employee.employeeId,
        gender: employee.gender,
        gradeNo: employee.gradeNo,
        mobileNo: employee.mobileNo,
        name: employee.name}
    });
  }

}
