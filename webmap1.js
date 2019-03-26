let mymap = L.map('map1').setView([32.18, -99.14], 5)
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap)
let point1 = L.marker([30, -90]).addTo(mymap)
let polygon1 = L.polygon([
  [30, -90],
  [31, -92],
  [32, -91]
]).addTo(mymap);
