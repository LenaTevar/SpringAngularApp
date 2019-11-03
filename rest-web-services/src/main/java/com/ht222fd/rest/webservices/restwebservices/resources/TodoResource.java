package com.ht222fd.rest.webservices.restwebservices.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ht222fd.rest.webservices.restwebservices.models.Todo;
import com.ht222fd.rest.webservices.restwebservices.services.TodoHardCodedService;
@CrossOrigin (origins="http://localhost:4200")
@RestController
public class TodoResource {
	
	@Autowired
	private TodoHardCodedService todoService;
	/*
	 * Decorator Get mapping gets a get request with the variable from the URL
	 * user name and calls the service to find all the tasks from that user
	 * */
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	/*
	 * Decorator Delete Mapping gets a delete request with the variables from the URL
	 * user name and id. If the service is able to delete the task, then it will return
	 * the task deleted and this method will return 204. If not, it will return null. 
	 * When null, return not Found.
	 * */
	@DeleteMapping("/users/{username}/todos/delete/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		Todo todo =  todoService.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
		
	}
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		Todo todo =  todoService.findTodoById(id);
			return todo;
		
		
	}
}
