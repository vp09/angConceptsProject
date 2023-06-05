import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  submitEmp:NgForm | undefined;

 
  constructor(private app:AppService, private router:Router){}

  addEmp(emp:any){
    
    this.app.addEmployee(emp.value);
    console.log("navigator method");
    this.router.navigate(['listEmployee']);
    
  }
}
