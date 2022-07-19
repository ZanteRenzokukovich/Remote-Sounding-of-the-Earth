//Карта OpenStreetMap
let map = L.map('map').setView([50.450001, 30.523333], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: ['a','b','c']
}).addTo(map);

    //Маркер на Київ
    //L.marker([50.4, 30.5]).addTo(map).bindPopup("My Marker");

//Полігон
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

//Масштабувати карту до полігону
function clickPolygon(){
    map.fitBounds(mpolygon.getBounds());
}

//Маркер
let coordinatePoint = {
        "type": "Point",
        "coordinates": [33.92314933593751, 49.08001002976464]
        }

let mpoint = L.geoJSON(coordinatePoint).addTo(map);

//Масштабувати карту до маркера
function clickPoint(){
    map.fitBounds(mpoint.getBounds());
}

//Полілінія
let coordinateLine = {
    "type":"LineString",
    "coordinates": [
           [34.72515128906251, 48.92144357347812],
           [35.25249503906251, 48.71165246381614],
           [34.92290519531251, 48.23092113408583]
        ]}

let mline = L.geoJSON(coordinateLine, {color: 'green'}).addTo(map);

//Масштабувати карту до полілінії
function clickLine(){
    map.fitBounds(mline.getBounds());
}

