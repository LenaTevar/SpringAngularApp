import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthService } from '../services/harcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  /**
   * Data Binding html -> ts
   * in html [(ngModel)]="username"
   * username and password are data binded in the html
   * 
   * Interpolation ts -> html
   * <p>{{username}}</p>
  */
  username = ''
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(private router: Router,
    private hardAuth: HarcodedAuthService
    ) { }

  handleLogin() : void {
    console.log('user',this.username)
    if(this.hardAuth.authenticate(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
      return
    }
    this.invalidLogin = true
  }
  
}
