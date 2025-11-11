import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isUserLoggedIn = false;
  login(){
    return this.isUserLoggedIn=true
  }
  logout(){
    return this.isUserLoggedIn=false;
  }
  isAuthorized(){
    return this.isUserLoggedIn;
  }
}
