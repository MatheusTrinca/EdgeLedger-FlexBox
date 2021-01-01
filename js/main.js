let map;

function initMap() {
  const loc = { lat: 37.452473, lng: -122.1212843 }
  map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 10,
  });
  const marker = new google.maps.Marker({position: loc, map})
}