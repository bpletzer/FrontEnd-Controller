/**
* This is the "Beastie Boys" Demo!
* @author Christian Krause
*/
define(["jquery", "moduleMediator", "libs/jQuery/jquery-animate-css-rotate-scale", "libs/jQuery/jquery-css-transform"], function($, moduleMediator){
  	var exports = {};
	exports.init = function(elem){
		// beastie stand for fancy
		$("head").append("<link rel='stylesheet' href='script/ckrause/maestro.css'>");

		$(elem).click(function(){
			// beastie stands for not dump
			$(this).unbind();
			// beastie stands groovy
			$('#ckrause').append('<audio id="ckrause-maestro" autoplay="true" src="script/ckrause/maestro.ogg">');

			// resize listener
			var winW, winH;
			var calWindow = function(){
				if ($(window).width() != winW || $(window).height() != winH) {
					moduleMediator.publish('window.resized', $(window).width(), $(window).height());
				}
				winW = $(window).width();
				winH = $(window).height();
			};
			calWindow(); // init calculate window dimensions
			setInterval(calWindow, 1000); // listen on window resize

			// random movement animation
			var anim = function(el) {
				var element = el; // cache an element reference
				var offset = $(el).offset(); // cache offset
  				// smoooooth it baby
  				animSmooth = Math.floor(Math.random()*2500);
	  			if (animSmooth < 1000) {
	  				animSmooth = 1000;
	  			}
	  			// map every animation element to position absolute
	  			if ($(el).attr('anim') != 'run') {
		  			$(el).css({
		  				'position': 'absolute',
						'top': offset.top,
						'left': offset.left
		  			});
	  			}
	  			$(el).attr('anim', 'run'); // mark element as running in animation
	  			// smoothness magic
	  			var x = Math.floor(Math.random()*winW - 200);
	  			var y = Math.floor(Math.random()*winH - 200);
	  			if (x < 100) {
	  				x = 100;
	  			} else {
	  				var borderPatrolW = $(el).width();
	  				var borderPatrolH = $(el).height();
	  				if (borderPatrolW + x > winW) {
	  					x = winW - 100 - borderPatrolW;
	  				}
	  			}
	  			if (y < 100) {
	  				y = 100;
	  			} else {
	  				if (borderPatrolH + y > winH) {
	  					y = winH - 100 - borderPatrolH;
	  				}
	  			}
	  			$(el).animate({
	  	  			'top': y, // 200px padding on top
	  	  			'left': x, // and 200px padding on the right,
	  	  			'rotate': '+=360deg'
	  			}, animSmooth, function(){
	  				moduleMediator.publish('element.manipulation', x, y);
	  				anim(element); // recursion alias once-kicked-never-stopped
				});
				// bring user to top of document
				$('html, body').animate({scrollTop:0}, 'slow');
			};

			// boot animations for all frontend controller demos
			jQuery.each($('#main').children(), function(idx, el){
				anim(el);
			});
			// sperate kick for the todos basic example
			anim($('#views'));
		});
	}
	return exports;
});
