
// define paths to all your toplevel modules and libraries up front
require.config({
  paths: {
    "moduleAnnotationsLoader": "core.jquery/jquery.moduleAnnotationsLoader",
    "moduleMediator": "core.jquery/jquery.moduleMediator",
    "jquery": "libs/jQuery/jquery-1.7.1"
  }
});


require(["moduleAnnotationsLoader", "console/logger"], function(moduleAnnotationsLoader, logger){
  logger.init();
  moduleAnnotationsLoader.execute();
});
