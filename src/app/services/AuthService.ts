import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const userId = localStorage.getItem('userId');
    const dateExpire = localStorage.getItem('expireAt');

    if (null === userId || null === dateExpire) {
      return false;
    }

    return Date.parse(dateExpire) > new Date().getTime();
  }

  login(userId: string): void 
  {
    localStorage.setItem('userId', userId);
    let dateExpire = new Date();

    dateExpire.setHours(dateExpire.getHours() + 2);
    localStorage.setItem('expireAt', dateExpire.toString());
  }

}