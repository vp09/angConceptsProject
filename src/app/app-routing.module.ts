import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const routes: Routes = [
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'listEmployee',component:ListEmployeeComponent},
  {path:'EmpDetails',component:EmpDetailsComponent},
 
  // { path: '',   component:AppComponent }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
