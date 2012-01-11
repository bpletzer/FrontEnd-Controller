define(["jquery"], function($){
  var exports = {},
      out,
      input,
      btn;
  
  function repeat(str,nr)
  {
      return Array(nr+1).join(str);
  }
  
  function cowsay(str)
  {
      var cow = "        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n",
          result = '';
      result = "  "+repeat('_',str.length)+"  \n";
      result+= "&lt; "+str+" &gt;\n";
      result+= "  "+repeat('-',str.length)+"  \n";
      
      return result+cow;
  }
  
  function doStuff()
  {
      var val = input.val();
      if(val != '')
      {          
          out.html(cowsay(val));
      }
      else
      {
          out.html('');
      }
  }

  exports.init = function(elem){
      elem = $(elem);
      out   = elem.find('.out');
      input = elem.find('input.in');
      btn = elem.find('input.do');
            
      btn.bind('click',function(){
          doStuff();          
      });
      
      if(btn.hasClass('clicked'))
      {
          btn.removeClass('clicked');
          doStuff();
      }
  };

  return exports;
});
