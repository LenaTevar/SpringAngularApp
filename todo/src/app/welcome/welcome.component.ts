import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome message'
  username = ''
  /**
   * app routing added a param, login ts navigates to here + param name
   */
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
      this.username = this.route.snapshot.params['name']    
    }

}
