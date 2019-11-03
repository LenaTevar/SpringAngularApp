import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthService {
  userGuard
  constructor() { 
    this.userCheck()
  }

  authenticate (user, pass){
    if (user === 'lena' && pass === '123'){
      sessionStorage.setItem('authGuard', user)
      return true
    }
    return false
  }
  
  logout(){
    sessionStorage.removeItem('authGuard')
  }

  userCheck(){
    this.userGuard = !(sessionStorage.getItem('authGuard')===null)    
  }
  userIsLogged(){
    return !(sessionStorage.getItem('authGuard')===null)   
  }
  getUser(){
    return sessionStorage.getItem('authGuard')
  }

}
