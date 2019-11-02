# Notes
## Controllers
REST handlers -> @RestController

```java
@RestController
public class HelloWorldController {
	
	
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello";
	}

}
```

### Return Bean

```java
@RestController
public class HelloWorldController {

	@GetMapping(path="/hello-bean")
	public HelloWOrldBean hello() {
		return new HelloWOrldBean("HelloWorld");
	}
}
/*BEAN HAS GETTER AND SETTER - RETURNS JSON ON REQUEST URL*/
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

```

# Servlet
Dispatcher Servlet knows all the url mappings to beans and which is the right controller/method. 

### debug application.properties
` logging.level.org.springframework = debug `

## Path Params
```java
@RestController
public class HelloWorldController {
	
	@GetMapping(path="/hello-bean/path/{name}")
	public HelloPath helloPath(@PathVariable String name) {
		return new HelloPath(String.format("Hello World, %s", name));
	}
}
/*CLASS*/

public class HelloPath {
	private String say;
	
	public HelloPath(String say) {
		this.say = say;
	}

	public String getSay() {
		return say;
	}

	public void setSay(String say) {
		this.say = say;
	}

}

```
# Connect Angular vs Back Spring
We want to allow requests from 4200 (Angular port) with cross origin
```
@CrossOrigin (origins="http://localhost:4200")
@RestController
public class HelloWorldController {...}
```
