let mymap3 = L.map('map3').setView([30.4, -90.16], 13)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap3)
let markerArray = [30.4	, -90.16]


let myGreenIcon = L.icon({
  iconUrl: 'star.png',
  shadowUrl: 'star-shadow.png',
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let station = L.marker([30.4	, -90.16], {icon: myStarIcon}).addTo(mymap3);


let polygonCoords = [
  [30.4, -90.17],
  [30.4, -90.18],
  [30.41,-90.18],
  [30.41,-90.17]
]

let polygonStyle = {
  color: 'orange',
  fillColor: 'yellow',
  weight: 1
}

let neighborhood = L.polygon(polygonCoords, polygonStyle).addTo(mymap3)
