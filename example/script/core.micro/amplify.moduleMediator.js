define(["amplify.core"],function(){

    var exports,

    subscribe = function(channel, fn){
        amplify.subscribe( channel, fn);
        return this;
    },
 
    publish = function(channel){
        var args = Array.prototype.slice.call(arguments, 1);
        amplify.publish( channel, args );
        return this;
    };
 
    exports = {
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };

  return exports;

});
