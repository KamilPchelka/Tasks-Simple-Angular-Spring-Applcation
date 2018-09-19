import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, timer} from "rxjs";
import {Task} from "../models/task";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})


export class TaskService {

  tasks = new BehaviorSubject<Task[]>([]);
  tasksURL = 'http://localhost:8080/api/tasks/';

  constructor(private http: HttpClient) {

    timer(1000, 1000).subscribe(() => {
      this.http.get<Task[]>(this.tasksURL).subscribe(value => this.tasks.next(value))
    });
  }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  updateOrCreateTask(task: Task): Observable<Task> {
    const url = `${this.tasksURL}`;

    return this.http.post<Task>(url, task, httpOptions)

  }
}
