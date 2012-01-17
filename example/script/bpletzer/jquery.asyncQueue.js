(function($){
  $.fn.aqueue = function(queueName, async){
    var scope = this[0] || window
        ,aqueue;

    if ('undefined'===typeof(scope[queueName])){
      scope[queueName] = [];
    }
    aqueue = scope[queueName];

    aqueue.execute = function(){
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

      aqueue.push= function(value){
        var that = this;
        Array.prototype.push.call(that, value);
        that.execute();
      }
    aqueue.execute();

    return this;
  }
}(jQuery));
