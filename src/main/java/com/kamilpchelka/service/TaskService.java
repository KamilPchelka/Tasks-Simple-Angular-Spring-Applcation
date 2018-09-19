package com.kamilpchelka.service;

import com.kamilpchelka.domain.Task;

public interface TaskService {


    Iterable<Task> list();

    Task save(Task task);
}
