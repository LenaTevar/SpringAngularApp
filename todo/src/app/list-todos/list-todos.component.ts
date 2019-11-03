import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit { 
  todos: Todo[]
  systemMsg
  username
  newTodoId = -1
/*
  todos = [
    new Todo(1, 'Dance', false, new Date()),
    new Todo(2, 'Angular', false, new Date()),
    new Todo(3, 'Eat Rich', false, new Date())

  ]*/
  constructor(private route: ActivatedRoute,
    private tds: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name']
    this.getAllByUser()
  }
  deletetodo( id){
    this.tds.deleteTodoById(this.username, id).subscribe(response => {
      this.systemMsg = "Deleted todo: " + id
      this.getAllByUser()
    }
    )
  }
  updatetodo(id){
    this.router.navigate(['todos',this.username,id])
  }
  getAllByUser(){
    this.tds.getTodosByUsername(this.username).subscribe(response => {
      this.todos = response
    })
  }
  add(){
    console.log("add")
    this.router.navigate(['todos',this.username,this.newTodoId])
  }

}

export class Todo {
  constructor(
    public id: number, 
    public description: string, 
    public done: boolean, 
    public targetDate: Date) {}
}