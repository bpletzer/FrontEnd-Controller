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
        mediator = moduleMediator
        counter = 0,
        click = function(){
          counter = counter + 1;
          moduleMediator.publish('facebook.like');
        };

    removeClass(item, 'off');

    img = document.createElement("img")
    img.src = "script/facebook/images/facebook_like_list_view.gif";
    img.onclick = click;
    item.appendChild(img);

    if (item.className.indexOf('clicked')!==-1){
      click.call(item);
    }
  };

  return exports;
});
