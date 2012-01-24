define(["libs/history.js/scripts/uncompressed/history", "libs/history.js/scripts/uncompressed/history.adapter.native"], function(){
  var History = window.History;
  window.History = null;

  return History;
});
