define(["jquery", "moduleMediator"], function($, moduleMediator){
  var exports = {};

  var count = function () {

    var day = 0,
        hours = 0,
        mins = 0,
        secs = 0,
        amount,
        dateFuture,
        dateNow;

    dateFuture = new Date(2011, 11, 24, 23, 59, 59);
    dateNow = new Date();
    amount = dateFuture.getTime() - dateNow.getTime()+5;

    if (amount < 0) {
      return "Sylvester ist schon vorbei! :-("            
    }
        
    amount = Math.floor(amount/1000);

    days = Math.floor(amount/86400);
    amount = amount%86400;

    hours = Math.floor(amount/3600);
    amount = amount%3600;

    mins = Math.floor(amount/60);
    amount = amount%60;

    secs = Math.floor(amount);

    return "Sylvester Timeout: " + days + " Tage " + hours + " Stunden " + mins + " Minuten " + secs + " Sekunden";
  }


  exports.init = function(elem){
    moduleMediator.publish('muh', 'mäh');
    $('button', elem).click(function () {
      $('.dateCount').html(count());
    });
  };

  return exports;
});
