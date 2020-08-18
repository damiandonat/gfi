import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials: any = {
    email: '',
    password: ''
  };
  
  public errorControl = {};
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }

  resetError(): void {
    setTimeout(() => {
      this.errorControl = {};
    }, 3000);
  }

  login(): void {
    const respError = this.loginService.checkValues(this);

    if (respError.error) {
      this.errorControl = respError;
      this.resetError();
      return;
    }

    this.loginService.login();
    
    this.router.navigate(['/films']);

  }

}
