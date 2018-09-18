import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TasksComponent} from "./components/tasks/tasks.component";
import {TaskService} from "./services/task.service";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
