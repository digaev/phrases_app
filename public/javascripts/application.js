// Put your application scripts here

$(function() {
  'use strict';

  $('#get-phrase').on('click', function(e) {
    e.preventDefault();

    $.getJSON('/', function(data) {
      var content = $('#phrases tbody');

      $('tr td.phrase-body', content).map(function(i, el) {
        var text = $(el).text();
        for (var n = data.length - 1; n >= 0; --n) {
          if (data[n].body === text) {
            data.splice(n, 1);
          }
        }
      });

      $.each(data, function(i, obj) {
        var tr = $('<tr />');
        tr.append('<td>' + obj.id + '</td>');
        tr.append('<td class="phrase-body">' + obj.body + '</td>');
        tr.appendTo(content);
      });
    });
  });
});
