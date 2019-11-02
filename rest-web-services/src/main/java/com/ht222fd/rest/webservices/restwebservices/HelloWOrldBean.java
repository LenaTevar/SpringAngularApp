package com.ht222fd.rest.webservices.restwebservices;

public class HelloWOrldBean  {
	private String message;
	
	public HelloWOrldBean (String message) {
		this.setMessage(message);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWOrldBean [message=" + message + "]";
	}
	
}
