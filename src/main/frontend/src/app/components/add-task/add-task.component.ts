import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../models/task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  @ViewChild('taskForm') taskForm;

  task: Task = {
    id: undefined,
    name: '',
    dueDate: '',
    completed: false

  };

  constructor() {
  }

  ngOnInit() {
  }

  //TODO create logic that uploads new task to the server
  onSubmit() {
    console.log(this.task);
    this.taskForm.reset()
  }
}
