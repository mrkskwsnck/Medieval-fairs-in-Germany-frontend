/* Assumnig Leaflet was initiaized successfully */

function loadMap() {
  /* Initializing map with the center set to Germany (more or less)
   * and zoom set to fit on a display of mobile devices
   * such as iPhone 5, 5C, 5S and SE */
  var map = L.map('map').setView([51.0, 11.0], 6);
  
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
  }).addTo(map);
}
