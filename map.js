var element = document.getElementById('osm-map');
var map = L.map(element);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var target = L.latLng('43.651070', '-79.347015');

map.setView(target, 14);

L.marker(target).addTo(map);

