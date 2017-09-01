import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Mean Starter Kit'
  todos: Array<String> = [];

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.getTodos()
      .subscribe(res => this.todos = res);
  }
}
