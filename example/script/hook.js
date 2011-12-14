
// define paths to all your toplevel modules and libraries up front
require.config({
  paths: {
    "order": "libs/require.js/order",
    "text": "libs/require.js/text",
    "moduleAnnotationsLoader": "core.jquery/jquery.moduleAnnotationsLoader",
    "moduleMediator": "core.jquery/jquery.moduleMediator",
    "jquery": "libs/jQuery/jquery-1.7.1",
    "jquery.tmpl": "libs/jQuery/jquery.tmpl.wrapper",
    "spine": "libs/spinejs/spine.wrapper",
    "spine.local": "libs/spinejs/local.wrapper",
    "json2": "libs/json/json2"
  }
});


require(["moduleAnnotationsLoader", "console/logger"], function(moduleAnnotationsLoader, logger){
  logger.init();
  moduleAnnotationsLoader.execute();
});
