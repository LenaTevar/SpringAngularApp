import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent  implements OnInit{
  ngOnInit(): void {
    console.log(this.ErrorMessage)
  }
  ErrorMessage: string =  'Page not found'
  constructor() { }


}
