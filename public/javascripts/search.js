
$(function() {
  var input = $('#search');
  var list = $('#bar form ol');
  
  var showSearchResults = function(data) {
    var xml = $(data.responseXML),
        places = xml.find('place');
    
    list.html('').animate({ height: 21 * (places.length || 1) + 'px' }, function() { list.removeClass('loading'); });
    
    if (places.length == 0) {
      list.append('<li>Leider nichts gefunden</li>');
      return;
    }
        
    places.each(function(i, place) {
      place = $(place);
      var html = '<li><a href="#"' +
        ' data-osm-id="' + place.attr('osm_id') + '"' +
        ' data-lon="' + place.attr('lon') + '"' +
        ' data-lat="' + place.attr('lat') + '"' +
        ' data-display-name="' + place.attr('display_name') + '"' +
        ' class="' + place.attr('type').replace(/_/g, '-') + '"' +
        '>' + place.attr('display_name') + '</a></li>';
      list.append(html);
    });
    
    var place = $(places[0]);
    jumpTo(place.attr('lon') * 1.0, place.attr('lat') * 1.0, zoom);
  };
  
  var search = function() {
    list.html('').addClass('loading').animate({ height: '24px', marginTop: '10px' });
    var q = input.val();
    $.ajax({ url: '/search?q=' + q + '&format=xml', complete: showSearchResults });
  };
  
  input.keypress(function(event) {
    if (event.keyCode == '13') {
      search();
      event.preventDefault();
    }
  });
  
  list.delegate('a', 'click', function() {
    var element = $(this);
    jumpTo(element.attr('data-lon') * 1.0, element.attr('data-lat') * 1.0, zoom);
    loadPlaces();
    toggleLayers(element.attr('class'), true);
    return false;
  });
});