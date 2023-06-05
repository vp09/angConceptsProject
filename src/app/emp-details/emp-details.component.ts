import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit{

  emp:any=[];
  Ename:string='';
  empEmail:string='';

 constructor(private router:Router, private activateRoute:ActivatedRoute){}

  ngOnInit(): void {
    if(this.activateRoute.snapshot.paramMap.has("name")){
      console.log("activated called");
      this.activateRoute.paramMap.subscribe(data=>{
        this.emp=data;
        // this.Ename=data.get(data["name"]);
        // this.empEmail=data.get["email"];
      })
      // 
      // this.Ename=this.activateRoute.snapshot.paramMap.get("name");
      // this.empEmail=this.activateRoute.snapshot.paramMap.get("email");
    }
  }


}
