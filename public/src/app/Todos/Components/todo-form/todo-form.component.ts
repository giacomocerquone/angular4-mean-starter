import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from './../../Services/data.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todos: Array<Object> = [];
  private todo: Object = {};

  constructor(private _dataService: DataService) {
    this._dataService.getTodos()
      .subscribe(res => this.todos = res);
  }

  onSubmit() {
    this._dataService.createTodo(this.todo)
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
