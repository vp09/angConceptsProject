import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  employeeList:any=[];
  // employee:Employee;
  constructor() { }

  addEmployee(empData:Employee){
    console.log("service is called");
    
    this.employeeList.push(empData);
    // console.log(this.employeeList);
  }
  getEmployee(){
    console.log(this.employeeList)
    return this.employeeList;
  }


}
interface Employee{
  name:'';
  email:'';
}
