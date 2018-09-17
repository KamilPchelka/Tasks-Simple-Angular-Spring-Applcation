package com.kamilpchelka.controller;


import com.kamilpchelka.domain.Task;
import com.kamilpchelka.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {


    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {",", "/"})
    public Iterable<Task> listTasks() {
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save(task);
    }

}
