define(["jquery", "bildergalerie/collections/main", "moduleAnnotationsLoader", "libs/history.adapter.amd"], function($, collection, loader, History){
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
      collec.next();
    });

    $(collec).on('update', function(){
      History.pushState(null, "image "+collec.current(), collec.current());
      $img.attr('src', collec.current());
    });

    $(elem).append('<div data-module="bildergalerie/controllers/navbar"><span class="prev">prev</span> <span class="current">0</span> <span class="next">next</span></div>');
    loader.execute(elem);
  };

  return exports;
});
