let statemap = L.map('map4').setView([39, -98], 4)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(statemap)


let stateStyle = function (feature) {
  let housesize = feature.properties.AVE_HH_SZ
  let stateColor = 'Olive'
  if ( housesize < 2.5 ) { stateColor = 'orange' }
}
  stateStyle = function () {
  let formatting = {
    color: 'red',
    weight: 1,
    fillOpacity: 0.2,
    bubblingMouseEvent: true
  }
  return formatting
}

let createPopup = function(feature, layer){
  let name = feature.properties.STATE_NAME
  let housesize = feature.properties.AVE_HH_SZ
  layer.bindPopup('Median housesize of ' + name + ': ' + housesize )
}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup
}

L.geoJSON(stateDemographic, stateOptions).addTo(statemap)
