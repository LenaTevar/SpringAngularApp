package com.ht222fd.rest.webservices.restwebservices.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ht222fd.rest.webservices.restwebservices.models.Todo;

@Service
public class TodoHardCodedService {
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "lena", "Do 0", new Date(), false));
		todos.add(new Todo(++idCounter, "lena", "Do 1", new Date(), false));
		todos.add(new Todo(++idCounter, "lena", "Do 2", new Date(), false));
		todos.add(new Todo(++idCounter, "lena", "Do 3", new Date(), false));
	}
	/*
	 * Hard-coded to return all the List instead of by user name 
	 * */
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo findTodoById(Long id) {
		Todo todo = findById(id);
		
		if(todo == null ) return null;
		
		return todo; 
	}
	/**
	 * Finds the task with the same id and removes it from the list. 
	 * If the task is found, then return the task deleted. 
	 * If not found or problem encountered, then return null. 
	 */	
	public Todo deleteById(Long id) {
		Todo todo = findById(id);
		
		if(todo == null ) return null;
		if(todos.remove(todo)) return todo; 
		
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() <= 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else  {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	private Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	
}
