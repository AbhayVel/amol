import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptmComponent } from './components/deptm/deptm.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeptmComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'deptm' , component: DeptmComponent}


    ])
  ]
})
export class DepartmentModule { }
