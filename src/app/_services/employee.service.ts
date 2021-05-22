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
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getAllEmployee(): Observable<any> {
    return this.http.get(API_URL + 'employee');
  }

  getAllEmployeeBankAccount(): Observable<any> {
    return this.http.get(API_URL + 'employeeBankList');
  }

  updateEmployee(employee): Observable<any> {
    return this.http.put(API_URL + 'employee/' + employee.id, {
      accountNumber: employee.accountNumber,
      address: employee.address,
      employeeId: employee.employeeId,
      gender: employee.gender,
      gradeNo: employee.gradeNo,
      mobileNo: employee.mobileNo,
      name: employee.name,
    }, httpOptions);
  }

  createEmployee(employee): Observable<any> {
    return this.http.post(API_URL + 'employee/', {
      accountNumber: employee.accountNumber,
      address: employee.address,
      employeeId: employee.employeeId,
      gender: employee.gender,
      gradeNo: employee.gradeNo,
      mobileNo: employee.mobileNo,
      name: employee.name,
    }, httpOptions);
  }

}
