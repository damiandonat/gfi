import { Injectable } from '@angular/core';
import _credentials from 'src/utils/credentials/credentials.login';
import { AccountService } from 'src/app/services/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private accountService: AccountService
  ) { }

  checkValues(data: any): any {

    const errorControl = {
      error: false,
      message: ''
    };

    if (data.credentials.password !== _credentials.password) {
      errorControl.error = true;
      errorControl.message = 'please, password is not valid';
    }

    if (data.credentials.email !== _credentials.email) {
      errorControl.error = true;
      errorControl.message = 'please, mail is not valid';
    }

    if (!data.credentials.password) {
      errorControl.error = true;
      errorControl.message = 'please, check password';
    }    

    if (!data.credentials.email) {
      errorControl.error = true;
      errorControl.message = 'please, check email';
    }

    if (!data.credentials) {
      errorControl.error = true;
      errorControl.message = 'please, check values';
    }

    return errorControl;
  }

  login(): any {
    this.accountService.createToken();
  }
}
