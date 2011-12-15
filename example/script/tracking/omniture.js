define(["http://www.chip.de/js/omniture_somtr_code_vH.23.4.js"], function(){
	
  var exports = {},
      somtr = window.somtr;
  
  exports.track = function(){
      somtr.t();	
  	};

  return exports;
});