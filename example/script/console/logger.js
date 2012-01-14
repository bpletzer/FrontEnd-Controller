define(["moduleMediator"], function(moduleMediator){
  var exports = {};

  exports.init = function(elem){

    moduleMediator.subscribe("like.facebook", function(){
      console.log('event happend: like.facebook')
    });

    moduleMediator.subscribe("muh", function(msg){
      console.log('Die Kuh sagt: ' + msg)
    });
    
    moduleMediator.subscribe("tracking.reload", function(){
      console.log('tracking.reload happend')
    });

    moduleMediator.subscribe("element.manipulation", function(x, y){
      console.log('Element is now moved to position: { x: ' + x + ' y: ' + y + ' }')
    });

    moduleMediator.subscribe("window.resized", function(w, h){
      console.log('Window dimensions changed to: { w: ' + w + ' h: ' + h + ' }')
    });
  };

  return exports;
});
