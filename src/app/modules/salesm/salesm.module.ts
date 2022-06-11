import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { RouterModule } from '@angular/router';
import { SalesaddComponent } from './components/salesadd/salesadd.component';



@NgModule({
  declarations: [
    SalesListComponent,
    SalesaddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: SalesListComponent,
        children: [
          { path: 'addsales', component: SalesaddComponent },


        ]
      },
      { path: 'add', component: SalesaddComponent }

    ])
  ]
})
export class SalesmModule { }
