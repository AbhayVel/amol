import { Component, isDevMode, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { QMathService } from '../../services/qmath.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'qdn-user-edit-reactive',
  templateUrl: './user-edit-reactive.component.html',
  styleUrls: ['./user-edit-reactive.component.css']
})
export class UserEditReactiveComponent implements OnInit {

  isUserFormSet = false;
  userForm: FormGroup = new FormGroup({});
  user: User = new User();
  repValue = '';
  constructor(private ac: ActivatedRoute,

    private router: Router,
    private qm: QMathService,
    private us: UserService

  ) {
    console.log("I am in COnstructor");

  }

  id : number=0;
  name = '';

  result=''

  ngOnInit(): void {

     this.ac.params.subscribe((p) => {
      this.id = +p["id"];
       this.getUser(this.id);
    })


  }

  getUser(id:  number) {
    this.us.getUserById(id).subscribe((user: User) => {
      this.user = user;
      this.setFormGroup(this.user);
    }, (err) => {
        if (isDevMode()) {
          alert("There is error" + err);
        } else {

        }
        
    })
  }
  // "name.firstName": new FormControl(user.name.firstName, [Validators.required, Validators.pattern("[A-Za-z]{3,20}")])

  setFormGroup(user: User) {
    this.userForm = new FormGroup({
      "id": new FormControl({ value: user.id, disabled: true }),
      "name": new FormGroup({
        "firstName": new FormControl(user.name.firstName, [Validators.required, Validators.pattern("[A-Za-z]{3,20}")]),
        "lastName": new FormControl(user.name.lastName, [Validators.required, Validators.pattern("[A-Za-z]{3,20}")])
        
      }),
      "fees": new FormControl(user.fees),
      "gender": new FormControl(user.gender),
      "doj": new FormControl(user.doj),
      //"status": new FormControl(user.status),

    })

  //  this.userForm.controls['id'].setValue(user.id})

    this.isUserFormSet = true;
  }

  save(userForm: any) {

    let u = { ...this.user, ...userForm.value };
    this.us.saveUser(u).subscribe((r) => {
      alert("User is saved.")
      this.router.navigate(['users'])
    }, (err) => {
        alert("There is err" + err);
    })


  }

}



//async saveObs(a: any, b: any) {
//  // this.result = (+a + +b).toString();
//  console.log("I m before call Obs + sub")
//  this.qm.divObs(a, b).subscribe((result) => {
//    console.log("I m in result call Obs + sub")
//    this.result = result;
//  }, (error) => {

//    console.log("I m in error call promise + then")
//    alert(error);
//  })

//  console.log("I m after call obs + subs")

//}


//timePro = '';
//timeObs = '';
//showTime() {
//  this.qm.showTimePro().then((res) => {
//    this.timePro = res;
//  })


//  this.qm.showTimeObs().toPromise().then((res) => {
//    this.timeObs = res;
//  })
//}

//changeUrl(val: any) {
//  this.router.navigate(['user', 'edit', val], { queryParams: { name: this.name + val }, skipLocationChange: false });

//}

//async save(a: any, b: any) {
//  // this.result = (+a + +b).toString();

//  //console.log("I m before call promise + await")
//  //   this.result = await this.qm.div(a, b);
//  //console.log("I m after call promise + await")

//  console.log("I m before call promise + then")
//  this.qm.div(a, b).then((result) => {
//    console.log("I m in result call promise + then")
//    this.result = result;
//  }).catch((error) => {
//    console.log("I m in error call promise + then")
//    alert(error);
//    this.result = '';
//  });
//  console.log("I m after call promise + then")

//  // this.result = this.qm.div(a, b);
//  //    this.router.navigate(['user', 'edit', val], { queryParams: { name: this.name+val }, skipLocationChange: false });

//}
