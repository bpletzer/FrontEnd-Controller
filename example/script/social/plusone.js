define(["https://apis.google.com/js/plusone.js"], function(){

  var exports = {};

  exports.init = function(elem){
    gapi.plusone.render(elem);
  };

  return exports;
});
