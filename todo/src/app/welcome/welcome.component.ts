import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloBeanDataService } from '../services/data/hello-bean-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome message'
  username = ''
  serviceMessage
  /**
   * app routing added a param, login ts navigates to here + param name
   */
  constructor(private route: ActivatedRoute,
    private hbd: HelloBeanDataService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log("welcome component")
    this.hbd.executeHelloBeanService().subscribe(response => {
      this.handleSuccess(response)
    })

  }

  handleSuccess(response) {
    this.serviceMessage = response.message
  }

}
