import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Links backend to frontend. 
 * httpClient commom angular gives the functionality
 * Once Spring server is up and runnig just make a get request. 
 * The address will be handled by spring  controller, that will return
 * whateve you wrote there...
 */
export class HelloBeanDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloBeanService(){
    console.log("Hello Bean Service")
    /* Check up Spring Hello World controller get mapping to this url
      Returns an observable
     */
    return this.http.get<HelloSpringBean>('http://localhost:8080/hello-bean/')
  }
}

export class HelloSpringBean {
  constructor(public message:string){}
}
