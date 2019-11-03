import { Component, OnInit } from '@angular/core';
import { HarcodedAuthService } from '../services/harcoded-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username
  constructor(private router: Router,private hardAuth: HarcodedAuthService,  ) { 
  }

  ngOnInit() {
    this.username = this.hardAuth.getUser()
  }

  routeTodos(){    
    this.router.navigate(['todos', this.username])
  }
}
