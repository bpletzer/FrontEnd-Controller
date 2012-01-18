define("bpletzer/hello", function(){

  var exports = {};

  exports.greet = function (name){
    return "Hello " + name +"!"
  };

  return exports;
});
