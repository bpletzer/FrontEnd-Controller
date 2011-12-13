define(["jquery"], function($){
  var exports = {},
      images = ["images/first.jpg","images/second.jpg","images/third.jpg","images/fourth.jpg","images/fifth.jpg"],
      counter = 0;

  exports.init = function(cnt){
    counter = cnt;
  };

  exports.prev = function() {
    counter = (counter + 4) % 5;
    $(exports).trigger('update');
    return images[counter];
  };
  
  exports.next = function() {
    counter = (counter + 1) % 5;
    $(exports).trigger('update');
    return images[counter];
  };

  exports.current = function(){
    return images[counter];
  };

  return exports;
});
