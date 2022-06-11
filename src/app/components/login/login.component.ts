import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'qdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   

  ngOnInit(): void {
  }


  constructor(private router: Router, private loginService: LoginService) {

  }

  login(userName: string, password: string) {
    if (userName == 'amol' && password == 'abc') {

      this.loginService.login({
        userName: userName,
        role: 'Admin',
        firstName: 'Amol'
      })
      this.router.navigate(['users']);
    } else if (userName == 'kaustubh' && password == 'abc') {

      this.loginService.login({
        userName: userName,
        role: 'sales',
        firstName: 'Amol'
      })
      this.router.navigate(['users']);
    } else if (userName == 'abhay' && password == 'abc') {

      this.loginService.login({
        userName: userName,
        role: 'dept',
        firstName: 'Amol'
      })
      this.router.navigate(['users']);
    }
  }
}
