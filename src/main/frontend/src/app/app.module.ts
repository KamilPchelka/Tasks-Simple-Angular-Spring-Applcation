import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TasksComponent} from "./components/tasks/tasks.component";
import {TaskService} from "./services/task.service";
import {AddTaskComponent} from './components/add-task/add-task.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
