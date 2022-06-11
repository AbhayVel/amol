import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginBehaviour?: BehaviorSubject<any>;
  constructor(private router: Router) {
    let str = sessionStorage.getItem("user");
    
    if (str) {
      let loginUser = JSON.parse(str);
      if (loginUser.firstName) {
        this.loginUser = loginUser;
        this.loginBehaviour = new BehaviorSubject<any>(loginUser);
      }
    }

    if (this.loginBehaviour == undefined) {
      this.loginBehaviour = new BehaviorSubject<any>(null);
    }
  }
  loginUser: any;

  public login(loginUser: any) {

    sessionStorage.setItem("user", JSON.stringify(loginUser));
    this.loginUser = loginUser;
    if (this.loginBehaviour) {
      this.loginBehaviour.next(loginUser);
    }
    
  }

  redirectUnauth() {
    this.router.navigate(['unauth']);
  }


  public logout() {
    sessionStorage.clear();
    if (this.loginBehaviour) {
      this.loginUser = null;
      this.loginBehaviour.next(null);
    }    
    this.router.navigate(['login']);

  }

}
