// Put your application scripts here

$(function() {
  'use strict';

  $('#get-phrase').on('click', function(e) {
    e.preventDefault();

    $.getJSON('/', function(data) {
      var content = $('#phrases tbody');
      var phrases = $('tr td.phrase-body', content).map(function(i, el) {
        return $(el).text();
      }).get();

      $.each(phrases, function(i, phrase) {
        for (var n = data.length - 1; n >= 0; --n) {
          if (data[n].body === phrase) {
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
