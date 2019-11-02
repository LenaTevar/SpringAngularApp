import { Component, OnInit } from '@angular/core';
import { HarcodedAuthService } from '../services/harcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardAuth: HarcodedAuthService) { }

  ngOnInit() {
    this.hardAuth.logout()
  }

}
