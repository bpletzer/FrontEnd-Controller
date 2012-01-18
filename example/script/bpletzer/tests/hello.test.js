GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  require(["bpletzer/hello"], function(greeter){
    assertEquals("Hello World!", greeter.greet("World"));
  });
};
