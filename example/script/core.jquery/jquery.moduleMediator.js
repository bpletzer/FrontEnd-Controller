define(function(){

    var exports,

    subscribe = function(channel, fn){
        if (!exports.channels[channel]) exports.channels[channel] = [];
        exports.channels[channel].push({ context: this, callback: fn });
        return this;
    },
 
    publish = function(channel){
        if (!exports.channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = exports.channels[channel].length; i < l; i++) {
            var subscription = exports.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };
 
    exports = {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };

  return exports;

});
