define(["moduleMediator"], function(moduleMediator){
  var exports = {};


function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
function addClass(ele,cls) {
	if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}
function removeClass(ele,cls) {
	if (hasClass(ele,cls)) {
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className=ele.className.replace(reg,' ');
	}
}

  exports.init = function(item){
    var img,
        mediator = moduleMediator,
        counter = 0;

    removeClass(item, 'off');

    img = document.createElement("img")
    img.src = "script/facebook/images/facebook_like_list_view.gif";
    img.onclick = function(){
      counter = counter + 1;
      moduleMediator.publish('facebook.like');
    };
    item.appendChild(img);
  };

  return exports;
});
