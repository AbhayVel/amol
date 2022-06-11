import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolePipe } from '../pipes/role.pipe';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {

  rolePipe?: RolePipe;
  constructor(private ls: LoginService) {
    this.rolePipe = new RolePipe(ls);
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    debugger;
    if (this.rolePipe?.transform(route.data.role)) {
      return true;
    } else {

      this.ls.redirectUnauth();
    return  false;
    }

  }
  
}
