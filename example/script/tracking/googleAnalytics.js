define(['http://www.google-analytics.com/ga.js'], function(){

  window._gaq = window._gaq || [];
  
  var exports = {};
  
  exports.track = function(){
      _gaq.push(['_setAccount', 'UA-XXXXX-X']);
      _gaq.push(['_trackPageview']);  	
  	};

  return exports;
});