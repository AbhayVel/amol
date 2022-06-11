import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogin = false;
  title = "Demo";

  constructor(private router: Router, private loginService: LoginService) {

  }
  ngOnInit(): void {

    if (this.loginService.loginBehaviour) {
      this.loginService.loginBehaviour.subscribe((user) => {
        if (user == null) {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }

      })
    }
    }
     

   
}
