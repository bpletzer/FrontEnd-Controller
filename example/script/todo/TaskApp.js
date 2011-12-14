define(["jquery", "spine", "todo/TaskModel", "todo/Tasks"], function($, Spine, Task, Tasks){

 var TaskApp = Spine.Controller.sub({
    events: {
      "submit form": "create",
      "click  .clear": "clear"
    },

    elements: {
      ".items": "items",
      "form input": "input"
    },

    init: function(){
      Task.bind("create",  this.proxy(this.addOne));
      Task.bind("refresh", this.proxy(this.addAll));
      Task.fetch();
    },

    addOne: function(item){
      var view = new Tasks({item: item});
      this.items.append(view.render().el);
    },

    addAll: function(){
      Task.each(this.proxy(this.addOne));
    },

    create: function(e) {
      e.preventDefault();
      Task.create({name: this.input.val()});
      this.input.val("");
    },

    clear: function(){
      Task.destroyDone();
    }
  });

  return {
    init: function(elem){
      new TaskApp({
        el: $(elem)
      });
    }
  };

});
