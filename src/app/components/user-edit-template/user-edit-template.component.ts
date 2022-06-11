import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, NgModel , Validators} from '@angular/forms';
import { User } from '../../models/user';
import { CustomValidators } from '../../utilities/custom-validators';

@Component({
  selector: 'qdn-user-edit-template',
  templateUrl: './user-edit-template.component.html',
  styleUrls: ['./user-edit-template.component.css']
})
export class UserEditTemplateComponent implements OnInit , AfterViewInit {

  @Input('user') user: User = new User;

  @ViewChild('fees', { static: false }) fees?: NgModel;
  @ViewChild('firstName', { static: false }) firstName?: NgModel;
  @ViewChild('RepfirstName', { static: false }) RepfirstName?: NgModel;

  repValue = '';

  constructor() { }
    ngAfterViewInit(): void {
      debugger;
      this.fees?.control?.setValidators([Validators.min(10000), Validators.max(50000)]);

      this.firstName?.control.setValidators([Validators.required, Validators.pattern('[A-Za-z]{3,20}'),CustomValidators.capitalizeWord()])

      this.RepfirstName?.control.setValidators([CustomValidators.compareControlValue(this.firstName)])

      this.repValue = this.user.name.firstName;

      //  this.fees?.control?.setValidators(Validators.max(50000))
    }

  ngOnInit(): void {
    debugger;
    this.fees?.control?.setValidators([Validators.min(10000), Validators.max(50000)]);
  }

  validate(firstName: NgModel) {

    if (!(firstName.value.substr(0, 1) >= String.fromCharCode(65) &&
      firstName.value.substr(0, 1) <= String.fromCharCode(91))

    ) {
     firstName.control.setErrors({ captial: true })
    }
  }

  save(userForm: NgForm) {
    if (!(userForm.value["user.name.firstName"].substr(0, 1) >= String.fromCharCode(65) &&
      userForm.value["user.name.firstName"].substr(0, 1) <= String.fromCharCode(91))

    ) {
      userForm.controls["user.name.firstName"].setErrors({captial: true})
    }

    debugger;
  }

}
