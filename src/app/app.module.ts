import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { GenderTitlePipe } from './pipes/gender-title.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SubjectMasterPipe } from './pipes/subject-master.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PagingComponent } from './shared-componets/paging/paging.component';
import { GridServiceService } from './services/grid-service.service';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { SharedModule } from './modules/shared/shared.module';
import { UserEditOwnComponent } from './components/user-edit-own/user-edit-own.component';
import { UserEditTemplateComponent } from './components/user-edit-template/user-edit-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './shared-componets/tree/tree.component';
import { UserEditReactiveComponent } from './components/user-edit-reactive/user-edit-reactive.component';
import { LoginComponent } from './components/login/login.component';
import { RolePipe } from './pipes/role.pipe';
import { UnAuthComponent } from './components/un-auth/un-auth.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { FirstDirective } from './directives/first.directive';
import { IsAuthorizedDisabledDirective } from './directives/is-authorized-disabled.directive';
import { DateDirective } from './directives/date.directive';
import { AccordianComponent } from './shared-componets/accordian/accordian.component';
import { AccordianDirective } from './shared-componets/accordian/accordian.directive';
import { DepartmentModule } from './modules/department/department.module';
import { SalesmModule } from './modules/salesm/salesm.module';

 
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    LeftPanelComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    SubjectListComponent,
    DeptListComponent,
    GenderTitlePipe,
    GenderPipe,
    StatusPipe,
    SortPipe,
    SubjectMasterPipe,
    FilterPipe,
    PagingComponent,
    UserEditOwnComponent,
    UserEditTemplateComponent,
    TreeComponent,
    UserEditReactiveComponent,
    LoginComponent,
    RolePipe,
    UnAuthComponent,
    TextBoxComponent,
    FirstDirective,
    IsAuthorizedDisabledDirective,
    DateDirective,
    AccordianComponent,
    AccordianDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DepartmentModule
  ],
  providers: [GridServiceService,  SecondService],
  bootstrap: [AppComponent]
})
export class QdnModule {

}

class ABc {

}


export class Def {

}


//one file is eq of Package or Namespace

