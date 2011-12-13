define(["jquery", "bildergalerie/collections/main"], function($, collec){
  var exports = {};

  exports.init = function(elem){
    $(".prev", elem).on('click', function(event){
      collec.prev();
      event.stopImmediatePropagation()
    });

    $(".next", elem).on('click', function(event){
      collec.next();
      event.stopImmediatePropagation()
    });

    $(collec).on('update', function(){
      $('.current', elem).html(collec.current());
    });
  };

  return exports;
});
