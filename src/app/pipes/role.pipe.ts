import { Pipe, PipeTransform } from '@angular/core';
import { LoginService } from '../services/login.service';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  constructor(private ls : LoginService) {

  }


  //"admin,sales"
  transform(value: string): boolean {
    if (!value) {
      return false;
    }

    if (!this.ls?.loginUser?.role) {
      return false;
    }

    const roleArray = value.split(",").map((e) => {
      return e.toLowerCase();
    })

  const index=  roleArray.findIndex((e) => {
     return e==this.ls.loginUser.role.toLowerCase()
  })

    if (index > -1) {
      return true;
    }

    return false;
  }

}
