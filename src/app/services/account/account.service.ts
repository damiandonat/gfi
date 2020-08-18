import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /**
   * logically you would implement greater security measures,
   * but in this case as a technical test and because of the project itself we do not apply them
   */

  constructor() { }
  /**
   * token
   */

  createToken(): void {
    sessionStorage.setItem('token', Math.random().toString(36).substr(2));
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

  setToken(value: string): void {
    sessionStorage.setItem('token', value);
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  idLogged(): boolean {
    if (this.getToken()) return true;
    return false;
  }
}
