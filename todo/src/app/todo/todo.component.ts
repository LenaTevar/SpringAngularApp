import { Component, OnInit } from '@angular/core';

import { TodoDataService } from '../services/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo : Todo 
  routeID
  routeUsername
  constructor( private route: ActivatedRoute, private tds: TodoDataService) {
   
   }

  ngOnInit() {
    this.todo = new Todo(-1, "Waiting", false, new Date())
    
    this.routeID = this.route.snapshot.params['id']
    this.routeUsername = this.route.snapshot.params['name']
    if(this.routeID != -1){
      this.tds.getTodoById(this.routeUsername, this.routeID).subscribe(response=> this.todo = response)
    }
  }
  sendTodo(){
    this.tds.saveTodoById(this.routeUsername, this.routeID, this.todo).subscribe();
  }
}
