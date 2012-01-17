define(['jquery'], function($){
  var exports = {};

  exports.init = function(elem){

    $(document.body).append('<div id="fb-root"/>');

    require(["http://connect.facebook.net/de_DE/all.js"], function(){
      var element = elem;
      FB.init({appId: '159909617367779'});
      FB.XFBML.parse(element);

      $(element).removeClass('off');
    });

  };

  return exports;
});
