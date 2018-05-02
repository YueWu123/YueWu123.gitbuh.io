let crimemap = L.map('map1').setView([33, -97], 8)
let basemapUrl1 = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let basemapUrl2 = 'https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}'
let basemapUrl3 = 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
let worldmap = L.tileLayer(basemapUrl1).addTo(crimemap)
let greymap = L.tileLayer(basemapUrl2)
let blackandwhitemap = L.tileLayer(basemapUrl3)

let myBasemaps = {
  'world map': worldmap,
  'grey map': greymap,
  'black and white map': blackandwhitemap
}
L.control.layers(myBasemaps).addTo(crimemap)

let markerArray = [33 , -97]

let mycrimeIcon = L.icon({
  iconUrl: 'crime.png',
  iconSize: [40, 30],
  popupAnchor: [-3, -76],
})

let station = L.marker([33 , -97], {icon: mycrimeIcon}).addTo(crimemap).bindPopup('Please click the link below of Dallas crime: '+ "<br>'<a href=https://www.neighborhoodscout.com/tx/dallas/crime> Dallas Crime Rate</a>'");

  let crimetype = function (feature) {
  let personal = feature.properties.PERSONAL
  let crime1 = feature.properties.MURDER
  let crime2 = feature.properties.RAPE
  let crime3 = feature.properties.ROBBERY
  let crime4 = feature.properties.ASSAULT
  let censusColor = 'Black'
  if ( personal < 50 ) { censusColor = 'orange' }
  }
  crimeType = function () {
  let formatting = {
    color: 'Black',
    weight: 1,
    fillOpacity: 0.2,
    bubblingMouseEvent: true
  }
  return formatting
  }


L.geoJson(Dallas_crime, crimetype).addTo(crimemap);

let createPopup = function(feature, layer){
  let name = feature.properties.TRACTCE10
  let personal = feature.properties.PERSONAL
  let murder = feature.properties.MURDER
  let rape = feature.properties.RAPE
  let robbery = feature.properties.ROBBERY
  let assault = feature.properties.ASSAULT
  layer.bindPopup('The census tract is ' + name + ';' + ' The number of personal crime is ' + personal + ';' + '<br>The number of murder is ' + murder + ';' +
' The number of rape is ' + rape + ';' + '<br>The number of robbery is ' + robbery + ';' + ' The number of assault is ' + assault + '<br>Please click the link below of Dallas crime: '+ "<br>'<a href=https://www.neighborhoodscout.com/tx/dallas/crime> Dallas Crime Rate</a>'")
}


let crimeOption = {
  style: crimetype,
  onEachFeature: createPopup
}

L.geoJSON(Dallas_crime, crimeOption).addTo(crimemap)
