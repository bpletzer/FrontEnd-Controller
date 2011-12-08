// pseudo code

define(function (){

  var exports = {};

  exports.execute = function () {
    // for each annotated module via attribute "data-module" load it
      require([module], function (mod) {
        mod.init(/* annotated dom elem */, 
                 /* parameters via attribute data-parameters */);
    });
  };

  return exports;
});
