define(["jquery"], function($){
  var exports = {};

  exports.init = function(elem){
    var $elem = $(elem);

    $elem.attr("data-event-app-id", 153013318066950);
    $elem.attr("class", "fb-live-stream");
    $elem.attr("data-width", 400);
    $elem.attr("data-height", 500);
    $elem.attr("data-always-post-to-friends", "false");

    $('body').append('<div id="fb-root"></div>');

    require(["http://connect.facebook.net/de_DE/all.js"], function(){
      FB.XFBML.parse(elem);
    });

  };

  return exports;
});
