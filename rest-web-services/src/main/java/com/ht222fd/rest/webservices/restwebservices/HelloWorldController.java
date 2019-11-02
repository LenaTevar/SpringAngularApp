package com.ht222fd.rest.webservices.restwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello";
	}

	@GetMapping(path="/hello-bean")
	public HelloWOrldBean hello() {
		return new HelloWOrldBean("HelloWorld");
	}
	
	@GetMapping(path="/hello-bean/path/{name}")
	public HelloPath helloPath(@PathVariable String name) {
		return new HelloPath(String.format("Hello World, %s", name));
	}
}
