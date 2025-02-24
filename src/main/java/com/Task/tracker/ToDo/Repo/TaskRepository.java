package com.Task.tracker.ToDo.Repo;



import com.Task.tracker.ToDo.Model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {
    List<Task> findByStatus(String status); // Custom query to find tasks by status
}
