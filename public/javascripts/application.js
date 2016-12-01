// Put your application scripts here

$(function() {
  'use strict';

  $('#get-phrase').on('click', function(e) {
    e.preventDefault();

    var ids = $('[data-phrase-id]').map(function(i, el) {
      return $(el).attr('data-phrase-id');
    }).get().join(',');

    $.getJSON('/', { exclude: ids }, function(data) {
      var content = $('#phrases tbody');
      $.each(data, function(i, obj) {
        var tr = $('<tr >');
        tr.attr('data-phrase-id', obj.id);
        tr.append('<td>' + obj.id + '</td>');
        tr.append('<td>' + obj.body + '</td>');
        tr.appendTo(content);
      });
    });
  });
});
