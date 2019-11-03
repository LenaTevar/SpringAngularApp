import { Component, OnInit } from '@angular/core';
import { HarcodedAuthService } from '../services/harcoded-auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username
  constructor(private hardAuth: HarcodedAuthService,  ) { 
  }

  ngOnInit() {
    this.username = this.hardAuth.getUser()
  }

  
}
