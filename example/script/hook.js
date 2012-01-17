
// define paths to all your toplevel modules and libraries up front
require.config({
  paths: {
    "order": "libs/require.js/order",
    "text": "libs/require.js/text",
    "moduleAnnotationsLoader": "core.jquery/jquery.moduleAnnotationsLoader",
    "moduleMediator": "core.jquery/jquery.moduleMediator",
    "jquery": "libs/jQuery/jquery-1.7.1",
    "jquery.tmpl": "libs/jQuery/jquery.tmpl.wrapper",
    "jquery.css-transform": "libs/jQuery/jquery-css-transform",
    "jquery.animate": "libs/jQuery/jquery-animate-css-rotate-scale",
    "spine": "libs/spinejs/spine.wrapper",
    "spine.local": "libs/spinejs/local.wrapper",
    "json2": "libs/json/json2"
  }
});


require(["moduleAnnotationsLoader",
		 "moduleMediator", 
         "console/logger", 
         "tracking/googleAnalytics",
         "tracking/omniture"], 
function(moduleAnnotationsLoader, moduleMediator, logger, googleAnalytics, omniture){

  moduleMediator.subscribe('muh', function(){
  	  googleAnalytics.track();
  	  omniture.track();
  	});
  	
  logger.init();
  moduleAnnotationsLoader.execute();
});
