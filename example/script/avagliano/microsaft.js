define(["jquery", "moduleMediator"], function($, moduleMediator)
{

// dealing with individual css ...
$("head").append("<link rel='stylesheet' href='script/avagliano/microsaft.css'>");

//set flag to one
flag=1

// function for yes-button
function jupp()
{
  alert("Vielen Dank für Ihre Spende. Wir haben den doppelten Betrag abgebucht, damit Sie auch Morgen noch kraftvoll zubeissen können ...")
}


// function for no-button
function nope()
{

  // when flag 1 then ...
  if(flag==1)
    {
      console.log()
      $('#buttno').css({'top': '0px'})
      $('#buttno').css({'left': '-300px'})
      // altering the flag
      flag=2
    }

  // when flag 2 then ...
  else if(flag==2)
    {
      $("#buttno").css({'top': '0px'})
      $("#buttno").css({'left': '50px'})
      // altering the flag
      flag=3
    }
  
  // when flag 3 then ...
  else if(flag==3)
    {
      $("#buttno").css({'top': '0px'})
      $("#buttno").css({'left': '-200px'})
      // altering the flag to init state
      flag=1
    }
};

  
var exports = {};
exports.init = function(flag){
    
    // chuck norris is entering the console
    moduleMediator.publish('muh', 'chuck norris will kick you that google itself won\'t find you');
    
    // binding my actions to the buttons
    $("#buttyes").click(jupp);
    $("#buttno").mouseover(nope);
  };

  return exports;


});