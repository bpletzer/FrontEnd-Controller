
// define paths to all your toplevel modules and libraries up front
require.config({
  paths: {
    "moduleLoader": "../../jquery.moduleLoader",
    "moduleMediator": "../../jquery.moduleMediator",
    "jquery": "libs/jQuery/jquery-1.7.1"
  },
});


require(["moduleLoader"], function(moduleLoader){
  moduleLoader.execute();


  require(["moduleMediator"], function(m){
    m.subscribe('facebook.like', function(){
      console.log('liked');
    });
  });
});
