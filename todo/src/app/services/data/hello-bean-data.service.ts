import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Links backend to frontend. 
 * httpClient commom angular gives the functionality.
 * Once Spring server is up and runnig just make a get request
 * to the local address of Spring server (normally in port 8800). 
 * The address will be handled by spring  controller, that will return
 * whatever you wrote it should happen when making a get request to 
 * that specific address
 */
export class HelloBeanDataService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Check up Spring Hello World controller get mapping to this url
   * @returns Observable of HelloSpringBean data
   */
  executeHelloBeanService(){
    return this.http.get<HelloSpringBean>('http://localhost:8080/hello-bean/')
  }

  executeHelloPathBeanService(name){
    return this.http.get<HelloSpringBean>(`http://localhost:8080/hello/path/${name}`)
  }
}
/**
 * Created to easy manipulate the content of the bean response.
 */
export class HelloSpringBean {
  constructor(public message:string){}
}
