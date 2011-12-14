define(["spine", "jquery.tmpl", "text!todo/todo.html"], function(Spine, $, view){

var Tasks = Spine.Controller.sub({
  events: {
    "change input[type=checkbox]": "toggle",
    "click  .destroy": "destroyItem"
  },

  init: function(){
    this.item.bind("update", this.proxy(this.render));
    this.item.bind("destroy", this.proxy(this.destroy));
  },

  render: function(){
    this.html($(view).tmpl(this.item));
    return this;
  },

  toggle: function(){
    this.item.done = !this.item.done;
    this.item.save();
  },

  destroyItem: function(){
    this.item.destroy();
  }
});

  return Tasks;
});
