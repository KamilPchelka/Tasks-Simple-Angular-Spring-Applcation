package com.kamilpchelka.service;

import com.kamilpchelka.domain.Task;
import org.springframework.stereotype.Service;

@Service
public interface TaskService {


    Iterable<Task> list();

    Task save(Task task);
}
