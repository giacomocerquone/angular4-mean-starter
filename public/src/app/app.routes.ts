import { Routes } from '@angular/router';

import { TodoListComponent } from './Todos/Components/todo-list/todo-list.component';
import { TodoFormComponent } from './Todos/Components/todo-form/todo-form.component';

export const AppRoutes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'create', component: TodoFormComponent },
];
