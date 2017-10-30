import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from './../../Services/data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<Object> = [];
  private todo: Object = {};

  constructor(private _dataService: DataService) {
    this._dataService.getTodos()
      .subscribe(res => this.todos = res);
  }

  ngOnInit() {}

  onTodoDelete(todoId: String) {
    this._dataService.deleteTodo(todoId)
      .subscribe(res => {
        this.todos = this.todos.filter( (todo: any) => {
          return todo._id != todoId;
        });
        console.log(res)
      });
  }

}
