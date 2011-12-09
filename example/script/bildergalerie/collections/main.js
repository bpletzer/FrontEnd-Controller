define(function(){
  var exports = {},
      images = ["images/first.jpg","images/second.jpg","images/third.jpg","images/fourth.jpg","images/fifth.jpg"],
      counter = 0;

  exports.init = function(cnt){
    counter = cnt;
  };
  
  exports.next = function() {
    counter = (counter + 1) % 5;
    return images[counter];
  };

  exports.current = function(){
    return images[counter];
  };

  return exports;
});
