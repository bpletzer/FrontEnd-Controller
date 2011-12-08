define(["jquery"], function($){
  var o = $({}),
      exports = {};

  exports.subscribe = function() {
    o.on.apply(o, arguments);
  };

  exports.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  exports.publish = function() {
    o.trigger.apply(o, arguments);
  };

  return exports;

});
