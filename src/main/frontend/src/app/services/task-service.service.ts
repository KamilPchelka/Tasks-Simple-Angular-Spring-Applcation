import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {


  tasksURL = 'http://localhost:8080/api/tasks/';

  constructor(private http: HttpClient) {
  }


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksURL);
  }
}
