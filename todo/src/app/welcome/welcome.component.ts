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
   * Login sent to this address with a param name.
   * ActivatedRoute will check the route snapshot param 'name'
   * to get the user name.
   * 
   */
  constructor(private route: ActivatedRoute,
    private hbd: HelloBeanDataService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name']
  }

  /**
   * Calling the HelloBeanDataService that makes a get
   * request to the bean url. 
   * Check up Spring project Hello World Controller to 
   * get more information about the bean.
   */
  getWelcomeMessage() {
    this.hbd.executeHelloBeanService().subscribe(response => {
      this.handleSuccess(response)
    })
  }

  handleSuccess(response) {
    this.serviceMessage = response.message
  }

}
