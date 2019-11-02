import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit { 
  todos: Todo[]
  systemMsg
/*
  todos = [
    new Todo(1, 'Dance', false, new Date()),
    new Todo(2, 'Angular', false, new Date()),
    new Todo(3, 'Eat Rich', false, new Date())

  ]*/
  constructor(private tds: TodoDataService) { }

  ngOnInit() {
    this.getAllByUser()
  }
  deletetodo( id){
    this.tds.deleteTodoById('lena', id).subscribe(response => {
      this.systemMsg = "Deleted todo: " + id
      this.getAllByUser()
    }
    )
  }
  getAllByUser(){
    this.tds.getTodosByUsername('lena').subscribe(response => {
      this.todos = response
    })
  }

}

export class Todo {
  constructor(
    public id: number, 
    public description: string, 
    public done: boolean, 
    public targetDate: Date) {}
}