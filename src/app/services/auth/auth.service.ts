import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private accountService: AccountService,
    public router: Router
  ) { }
  
  canActivate(): boolean {
    if (!this.accountService.getToken()) {
      this.accountService.removeToken();
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
