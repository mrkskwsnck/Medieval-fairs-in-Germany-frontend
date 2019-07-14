/* Assumnig Leaflet was initiaized successfully */

function loadMap() {
  /* Initializing map with the center set to Germany (more or less)
   * and zoom set to fit on a display of mobile devices
   * such as iPhone 5, 5C, 5S and SE */
  var map = L.map('map').setView([51.0, 11.0], 6);
  
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    maxZoom: 16,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
  }).addTo(map);
  
  /* Preparing popup content for a marker */
  var popupContent = document.createElement("div");
  var eventName = document.createElement("h4");
  eventName.appendChild(document.createTextNode("Mittelaltermarkt mit Burgfest in (Wiesbaden-)Frauenstein"));
  popupContent.appendChild(eventName);
  var eventDate = document.createElement("p");
  eventDate.appendChild(document.createTextNode("31.08.2013–01.09.2013"));
  popupContent.appendChild(eventDate);
  var eventDetails = document.createElement("p");
  eventDetails.appendChild(document.createTextNode("D-65201 Wiesbaden-Frauenstein"));
  eventDetails.appendChild(document.createElement("br"));
  eventDetails.appendChild(document.createTextNode("Vor der katholischen Kirche in Frauenstein"));
  eventDetails.appendChild(document.createElement("br"));
  var a = document.createElement("a");
  var href = document.createAttribute("href");
  href.value = "http://www.burgverein-frauenstein.de/";
  a.setAttributeNode(href);
  a.appendChild(document.createTextNode("Burgverein Frauenstein"));
  eventDetails.appendChild(a);
  popupContent.appendChild(eventDetails);
  eventDetails.appendChild(document.createElement("br"));
  var a = document.createElement("a");
  var href = document.createAttribute("href");
  href.value = "mailto:michael.bochen@gmx.de";
  a.setAttributeNode(href);
  a.appendChild(document.createTextNode("E-Mail an die Orga"));
  eventDetails.appendChild(a);
  popupContent.appendChild(eventDetails);
  
  /* Example of a marker pointing on D-65201 Wiesbaden-Frauenstein */
  var marker = L.marker([50.07749, 8.14564]).addTo(map).bindPopup(popupContent).openPopup();
}
