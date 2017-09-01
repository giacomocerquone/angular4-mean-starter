import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getTodos() {
    return this._http.get("/api/v1/todos")
      .map(result => result.json().data);
  }

  createTodo() {
    // return this._http.post("/api/v1/todo")
    //   .map(result => result.json().data);
  }

}
