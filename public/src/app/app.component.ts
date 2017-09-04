import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Mean Starter Kit';
  todos: Array<Object> = [];

  private todo: Object = {};

  constructor(private _dataService: DataService) {
    this._dataService.getTodos()
      .subscribe(res => this.todos = res);
  }

  onSubmit() {
    this._dataService.createTodo(this.todo)
      .subscribe(res => {
        this.todos.push(this.todo);
        console.log(res);
      });
  }

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
