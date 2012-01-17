
// define paths to all your toplevel modules and libraries up front
require.config({
  paths: {
    "order": "libs/require.js/order",
    "text": "libs/require.js/text",
//    "moduleAnnotationsLoader": "core.jquery/jquery.moduleAnnotationsLoader",
    "moduleAnnotationsLoader": "core.micro/qwery.moduleAnnotationsLoader",
//    "moduleMediator": "core.jquery/jquery.moduleMediator",
    "moduleMediator": "core.micro/amplify.moduleMediator",

    "jquery": "libs/jQuery/jquery-1.7.1",
    "jquery.tmpl": "libs/jQuery/jquery.tmpl.wrapper",
    "jquery.css-transform": "libs/jQuery/jquery-css-transform",
    "jquery.animate": "libs/jQuery/jquery-animate-css-rotate-scale",
    "spine": "libs/spinejs/spine.wrapper",
    "spine.local": "libs/spinejs/local.wrapper",
    "json2": "libs/json/json2",
    "bean": "libs/bean/bean",
    "amplify.core": "libs/amplify-1.1.0.core.wrapper",
    "qwery": "libs/qwery-1.0.1.wrapper",
    "bonzo": "libs/bonzo-1.0.0.wrapper"
  }
});

require(["jquery",
         "moduleAnnotationsLoader",
	 "moduleMediator", 
         "console/logger", 
         "tracking/googleAnalytics",
         "tracking/omniture",
         "ads/ad.core"], 
function(jquery, moduleAnnotationsLoader, moduleMediator, logger, googleAnalytics, omniture, ads){
  jquery.noConflict();

  moduleMediator.subscribe('muh', function(){
  	  googleAnalytics.track();
  	  omniture.track();
  	});
  	
  logger.init();
  moduleAnnotationsLoader.execute();
});
