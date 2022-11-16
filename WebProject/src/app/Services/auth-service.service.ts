import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  
  constructor() { }
  
  isAuthenticated() {
    var isLoggedIn = localStorage.getItem('jwt');
    return isLoggedIn;
  }
}