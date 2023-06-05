import { Component , OnInit} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  Currentemp=[];
  constructor(private app:AppService){}

  ngOnInit(): void {
    this.getSelectedEmployeeDetail();
    throw new Error('Method not implemented.');
  }

  getSelectedEmployeeDetail(){
    this.Currentemp=this.app.getEmployee();
  }
}
