import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../models/task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  @ViewChild('taskForm') taskForm;

  task: Task = {
    id: -1,
    name: '',
    dueDate: '',
    completed: false

  };

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.task);
    this.taskService.updateOrCreateTask(this.task).subscribe(value => {
      console.log(value);
    });
    this.taskForm.reset();
  }
}
