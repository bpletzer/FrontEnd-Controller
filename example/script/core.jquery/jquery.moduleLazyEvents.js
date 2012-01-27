define(['jquery', 'moduleAnnotationsLoader', 'libs/jQuery/jquery.inview'], function($, moduleAnnotationsLoader){

  var exports = {
  	    init: function(elem, eventType, module){
  	    	$(elem).one(eventType, function(){
              $(elem).attr('data-module', module);
                  
              require([module], function (mod) {
                mod.init.apply(mod, [elem]);
              });
  	    	});
          //moduleAnnotationsLoader.execute(elem);
  	    }
      };


  return exports

});
