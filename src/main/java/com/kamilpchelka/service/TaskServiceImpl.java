package com.kamilpchelka.service;

import com.kamilpchelka.domain.Task;
import com.kamilpchelka.respository.TaskRepository;

public class TaskServiceImpl implements TaskService {


    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }
}
