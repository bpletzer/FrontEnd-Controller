define(["jquery", "moduleMediator"], function($, moduleMediator){
  var exports = {};

  exports.init = function(elem){
    moduleMediator.publish('muh', 'mäh');
    $(elem).click(function(){
      var colorString = 'rgb(';
      for (i=0;i<3;i++){
        colorString += Math.floor(Math.random()*256);
        if (i<2) {
          colorString += ',';
        }
      }
      colorString += ')';
      $(elem).css('background-color', colorString);
    });
  };

  return exports;
});
