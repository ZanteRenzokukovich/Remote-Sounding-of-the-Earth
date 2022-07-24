// Карта OpenStreetMap
let map = L.map('map').setView([48.379433, 31.16558], 4); // координати України
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

    // Маркер на Київ
    // L.marker([50.4, 30.5]).addTo(map).bindPopup("My Marker");

// Полігон
let coordinatePolygon = {
        "type": "Polygon",
        "coordinates": [[
            [33.17882560546876, 49.48314198262034],
            [35.43651603515626, 49.52951380124367],
            [35.44200919921876, 48.73158413397283],
            [33.65123771484376, 49.042216165541724],
            [33.17882560546876, 49.48314198262034]
        ]]}

let mpolygon = L.geoJSON(coordinatePolygon, {color: 'red'}).addTo(map);

// Масштабувати карту до полігону
function clickPolygon(){
    map.fitBounds(mpolygon.getBounds());
    document.getElementById('info').innerHTML = "";
}

// Маркер
let coordinatePoint = {
        "type": "Point",
        "coordinates": [33.92314933593751, 49.08001002976464]
        }

let mpoint = L.geoJSON(coordinatePoint).addTo(map);

// Масштабувати карту до маркера
function clickPoint(){
    map.fitBounds(mpoint.getBounds());
    document.getElementById('info').innerHTML = "";
}

// Полілінія
let coordinateLine = {
    "type":"LineString",
    "coordinates": [
           [34.72515128906251, 48.92144357347812],
           [35.25249503906251, 48.71165246381614],
           [34.92290519531251, 48.23092113408583]
        ]}

let mline = L.geoJSON(coordinateLine, {color: 'green'}).addTo(map);

// Масштабувати карту до полілінії
function clickLine(){
    map.fitBounds(mline.getBounds());
    document.getElementById('info').innerHTML = ""; 
}

// Віддалити карту
function unZoom(){
    map.setView([50.450001, 30.523333], 3);
}

// Посилання до іконки
let myURL = jQuery('script[src$="main.js"]')
  .attr('src')
  .replace('main.js', '')

// Альтернатива
let myIcon = L.icon({
  iconUrl: myURL + 'pin24.png',
  iconRetinaUrl: myURL + 'pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

// Читання з json файлу (координати міст)
for (let i = 0; i < markers.length; ++i) {
  L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
    .bindPopup(
      '<a href="' +
        markers[i].url +
        '" target="_blank">' +
        markers[i].name +
        '</a>'
    )
    .addTo(map)
}

/* Координати розташування користувача
   Передає приблизне місце розташування...*/
let myLocationCount = 0;
let myLocationLatLng;

function myLocation() {
    document.getElementsByClassName('box');
    if (myLocationCount === 0) {
        map.locate({
            setView: true,
            maxZoom: 16
        });

        function onLocationFound(e) {
            let radius = e.accuracy;

            myLocationLatLng = e.latlng;

            L.marker(e.latlng, {
                icon: myIcon
            }).addTo(map).bindPopup("Ви не далі ніж " + radius + " метрів від цієї точки").openPopup();

            /* ... у радіусі */
            L.circle(e.latlng, radius).addTo(map);

            myLocationCount = myLocationCount + 1;
        }

        function onLocationError(e) {
            alert("Вибачте, ми не змогли вас знайти !");
        }
        map.on("locationfound", onLocationFound);
        map.on("locationerror", onLocationError);
    } else {
        fly(myLocationLatLng.lat, myLocationLatLng.lng, 12);
    }
}