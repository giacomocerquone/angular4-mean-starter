import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { DataService } from './data.service';

import { MdInputModule, MdCardModule, MdButtonModule, MdToolbarModule, MdMenuModule, MdIconModule } from '@angular/material';
import { TodoFormComponent } from './Todos/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
