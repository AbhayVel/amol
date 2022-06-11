import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { UserEditReactiveComponent } from './components/user-edit-reactive/user-edit-reactive.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthorizeGuard } from './guards/authorize.guard';
import { UnAuthComponent } from './components/un-auth/un-auth.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: UserListComponent, canActivate: [LoginGuard] },
  {
    path: 'users', component: UserListComponent, canActivate: [LoginGuard],

    children: [
      { path: 'edit/samepage/:id', component: UserEditReactiveComponent, canActivate: [LoginGuard] },
    ]


  },
  { path: 'depts', component: DeptListComponent, data: { role: "Admin,dept"} , canActivate: [LoginGuard, AuthorizeGuard] },
  { path: 'subjects', component: SubjectListComponent, canActivate: [LoginGuard] },

  { path: 'user/edit/:id', component: UserEditReactiveComponent, canActivate: [LoginGuard] },
 

  { path: 'sales', loadChildren: () => import('./modules/salesm/salesm.module').then(mod => mod.SalesmModule) },

  { path: 'unauth', component: UnAuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
