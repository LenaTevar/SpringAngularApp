import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getTodosByUsername(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodoById(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  getTodoById(username, id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  saveTodoById(username, id, todo : Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
}

