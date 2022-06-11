import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { RolePipe } from '../pipes/role.pipe';
import { LoginService } from '../services/login.service';

@Directive({
  selector: '[qdnIsAuthorizedDisabled]'
})
export class IsAuthorizedDisabledDirective {

  @Input('qdnIsAuthorizedDisabled') role: any;

  isAuth = true;

  rolePipe?: RolePipe

  @HostBinding('class.red') get valid() { return !this.isAuth; }

  constructor(private ele: ElementRef<any>, private loginService: LoginService) {
    this.rolePipe = new RolePipe(loginService);
  }

  ngOnInit(): void {
    debugger;
    if (this.rolePipe?.transform(this.role)) {
      return;
    } else if (this.ele && this.ele.nativeElement) {
      this.isAuth = false;
      this.ele.nativeElement.disabled = true;
    }
  }

}
