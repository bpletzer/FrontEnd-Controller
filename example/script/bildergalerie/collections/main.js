define(["jquery"], function($){
  var exports = {},
      images = ["images/first.jpg","images/second.jpg","images/third.jpg","images/fourth.jpg","images/fifth.jpg"],
      counter = 0,
      folder = "/FrontEnd-Controller/example/";

  exports.init = function(cnt){
    counter = cnt;
  };

  exports.prev = function() {
    counter = (counter + 4) % 5;
    $(exports).trigger('update');
    return folder + images[counter];
  };
  
  exports.next = function() {
    counter = (counter + 1) % 5;
    $(exports).trigger('update');
    return folder + images[counter];
  };

  exports.current = function(){
    return folder + images[counter];
  };

  return exports;
});
