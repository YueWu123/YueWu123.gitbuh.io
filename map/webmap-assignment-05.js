let statemap = L.map('map5').setView([39, -98], 4)
let basemapUrl1 = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let basemapUrl2 = 'https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}'
let basemapUrl3 = 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
let worldmap = L.tileLayer(basemapUrl1).addTo(statemap)
let greymap = L.tileLayer(basemapUrl2)
let blackandwhitemap = L.tileLayer(basemapUrl3)

let myBasemaps = {
  'world map': worldmap,
  'grey map': greymap,
  'black and white map': blackandwhitemap
}
L.control.layers(myBasemaps).addTo(statemap)

let stateStyle = function (feature) {
  let housesize = feature.properties.AVE_HH_SZ
  let stateColor = 'Black'
  if ( housesize < 2.57 ) {
    stateColor = 'Olive'
  }

  stateStyle = function () {
  let formatting = {
    color: stateColor,
    weight: 10,
    fillOpacity: 2.0,
    bubblingMouseEvent: true
  }
  return formatting
}
}

let createPopup = function(feature, layer){
  let name = feature.properties.STATE_NAME
  let housesize = feature.properties.AVE_HH_SZ
  layer.bindPopup('Median housesize of ' + name + ': ' + housesize + '<br>National average: 2.57')
}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup
}

L.geoJSON(stateDemographic, stateOptions).addTo(statemap)
