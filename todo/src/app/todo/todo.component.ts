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
  todo : Todo = new Todo(-1, "Waiting", false, new Date());
  routeID
  routeUsername
  constructor( private route: ActivatedRoute, private tds: TodoDataService) { }

  ngOnInit() {
    this.routeID = this.route.snapshot.params['id']
    this.routeUsername = this.route.snapshot.params['name']
    this.tds.getTodoById(this.routeUsername, this.routeID).subscribe(response=> this.todo = response)
  }
  sendTodo(){
    console.log(this.todo)
  }
}
