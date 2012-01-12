define(["jquery", "moduleMediator"], function($, moduleMediator){
  var exports = {};
  var nyans = 0;

  loadCat = function() {

    // Stylesheet einbinden
    if (document.createStyleSheet)
    {
      document.createStyleSheet("script/dmohl/cat.css");   
    }
    else 
    {
      $("head").append("<link rel='stylesheet' href='script/dmohl/cat.css'>");
    }

    // Tag für den neuen Content erstellen
    $("#dmohl").append("<div class='nc'></div>");

    // Katze und Musik laden
    $("#dmohl .nc").load("script/dmohl/cat.html");
    $("#dmohl .nc").append("<audio class='ncogg' loop='loop' src='script/dmohl/nyancat.ogg' autoplay='true'>");

    // Event listener auf den Player legen
    $("#dmohl .ncogg").bind('ended', function(){
        $(this).currentTime = 0;
    }, false);

    // Button verstecken
    $("#dmohl input").slideUp("slow");

    // Bewegung der cat starten
    setInterval(nyan, 450);
  }

  nyan = function() {
    nyans += 1;

    // Content mit jedem nyan neu rendern
    $('#dmohl p').html("");
    for (i = 0; i < nyans; i++)
    {
      $("#dmohl p").append("NYAN "); 
    }
    $("#dmohl p").append("<h2>Nyan'ed "+nyans+" times.</h2>")
    

    // Katze bewegen falls sie noch nicht ganz auf der rechten seite ist
    var left = $("#nyanCat").css("left");
    var left = left.substring(0, left.length - 2);
    
    if (left < $(window).width() - 200) {
      $('#nyanCat').animate({
        "left": "+=10"
      }, 450);
    }
  }

  exports.init = function(elem){
    moduleMediator.publish('muh', 'NYAN NYAN NYAN NYAN');
    $("#dmohl input").click(loadCat);

  };

  return exports;
});
