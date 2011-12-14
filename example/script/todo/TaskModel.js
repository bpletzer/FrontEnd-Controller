define(["spine.local"], function(Spine){
  var Task = Spine.Model.sub();

  Task.configure("Task", "name", "done");

  Task.extend(Spine.Model.Local);

  Task.extend({
    active: function(){
      return this.select(function(item) {
        return !item.done;
      });
    },

    done: function(){
      return this.select(function(item) {
        return !!item.done;
      });
    },

    destroyDone: function(){
      var items = this.done();
      for(var i=0; i < items.length; i++)
        items[i].destroy();
    }
  });

  return Task;
});
