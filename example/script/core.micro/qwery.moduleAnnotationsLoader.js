define(["qwery"], function (qwery){

  var exports = {};

  exports.execute = function (context) {

    var nodeArray = qwery("[data-module]", context),
        nodeArrayLength = nodeArray.length,
        i;
    for (i=0; i<nodeArrayLength; i++) {
      (function(i){
        var item = nodeArray[i],
            module = item.getAttribute('data-module'),
            parameters = item.getAttribute('data-module-parameters') || '';
            
        parameters = parameters.split(',');
        parameters.unshift(item);

        require([module], function (mod) {
          mod.init.apply(mod, parameters);
        });
      }(i));
    }
  };

  return exports;
});
