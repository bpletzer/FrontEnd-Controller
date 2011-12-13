define(['jquery'], function ($){

  var exports = {};

  exports.execute = function (context) {
    $("[data-module]", context).each(function () {
      var item = this,
          $item = $(item),
          module = $item.data("module"),
          parameters = $item.data("module-parameters");

      require([module], function (mod) {
        mod.init(item, parameters);
      });
    });
  };

  return exports;
});
