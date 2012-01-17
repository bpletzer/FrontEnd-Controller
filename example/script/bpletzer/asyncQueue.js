define(function(){
  var exports = {},
      queue,
      execute = function(scope, async){
        var length = this.length
            ,func, that, value;

        while (this.length>0){
          value = this.shift();

          if ('object'===typeof(value)) {
            func = value.shift();
            that = value.shift() || scope;
            args = value || [];
          } else if ('function'===typeof(value)) {
            func = value;
            that = scope;
            args = []
          }

          if (false===async) {
            func.apply(that, args);
          } else {
            (function(f, t, a){
              setTimeout(function(){
                f.apply(t, a);
              },1);
            }(func, that, args));
          }

        }
      };

  exports.create = function(queueName, async){
    var scope = this[0] || window
        ,aqueue;

    if ('undefined'===typeof(scope[queueName])){
      scope[queueName] = [];
    }
    aqueue = scope[queueName];

    aqueue.execute = execute;

      aqueue.push= function(value){
        var that = this;
        Array.prototype.push.call(that, value);
        that.execute(scope, async);
      }
    aqueue.execute(scope, async);

    return aqueue;
  }

  return exports;
});
