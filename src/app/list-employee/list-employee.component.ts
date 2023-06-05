import { Component , OnInit} from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  Currentemp=[];
  constructor(private app:AppService, private router:Router){}

  ngOnInit(): void {
    this.getSelectedEmployeeDetail();
    // throw new Error('Method not implemented.');
  }

  getSelectedEmployeeDetail(){
    this.Currentemp=this.app.getEmployee();
    console.log(this.Currentemp);
  }

  getEmpDetails(e:any){
    this.router.navigate(["/EmpDetails",e]);
  }
}
