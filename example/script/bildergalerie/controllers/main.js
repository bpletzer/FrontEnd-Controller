define(["jquery", "bildergalerie/collections/main"], function($, collection){
  var exports = {};

  exports.init = function(elem){
    var collec = collection,
        clicked = elem.clk,
        $img = $('img', elem);

    collec.init(0);

    elem.click = function(){
      return true;
    };

    while (clicked){
      clicked -= 1;
      collec.next();
    }

    $img.attr('src', collec.current());

    $(elem).on('click', function(){
      $img.attr('src', collec.next());
    });

    
  };

  return exports;
});
