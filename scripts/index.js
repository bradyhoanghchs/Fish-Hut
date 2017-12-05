/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
function initMap() {
  var uluru = {lat: 35.222270, lng: -88.243320};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
console.log("JavaScript is amazing!");