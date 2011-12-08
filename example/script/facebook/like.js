define(["moduleMediator"], function(moduleMediator){
  var exports = {},
      click = function(){
        counter = counter + 1;
        moduleMediator.publish('facebook.like');
      }
      counter = 0;


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
        mediator = moduleMediator;

    removeClass(item, 'off');

    img = document.createElement("img")
    img.src = "script/facebook/images/facebook_like_list_view.gif";
    img.onclick = click;
    item.appendChild(img);

    while (window.click[0]) {
      click.call(window.click.shift());
    }
  };

  return exports;
});
