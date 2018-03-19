let mymap1 = L.map('map1').setView([30.4, -91.1], 13)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap1)
let markerArray = [30.4	, -91.1]
let marker = L.marker(markerArray).addTo(mymap1)
let polygon = L.polygon([
  [30.4, -90.17],
  [30.4, -90.18],
  [30.41,-90.18],
  [30.41,-90.17]
]).addTo(mymap1);

polygon.bindPopup('St. Katharine\'s and Wapping')
marker.bindPopup('Baton Rouge')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap1.on('click', logCurrentCoordinates)

let pointA = [30.5, -90.17]
let pointB = [30.5, -90.18]
let pointC = [30.6, -90.17]
let pointlist = [pointA, pointB, pointC]
let polyline = L.polyline(pointlist
).addTo(mymap1)
