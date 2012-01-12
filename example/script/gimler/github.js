define(['jquery'], function (){

  var exports = {};

  exports.init = function (elem) {
    $.getJSON('https://api.github.com/repos/bpletzer/FrontEnd-Controller/commits?callback=?', function (data) {
      var items = [];

      $.each(data.data, function(key, val) {
        items.push('<li id="' + key + '"><img src="' + val.author.avatar_url + '" alt="' + val.author.login + '" style="width:50px;height:50px"/> ' + val.commit.message + '</li>');
      });

      $('<h2>Github Commits</h2>')
        .appendTo(elem);
      $('<ul/>', { html: items.join('') })
        .appendTo(elem);
    });
  };

  return exports;
});
