$(document).ready(function(){
	
    L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JrbXVzIiwiYSI6Ilk4SXZBQ0EifQ.Jzfmsskd9_bcWSo0dIgezg';
	
    var baseMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    var basemap2 = L.mapbox.tileLayer('grkmus.ldgjk96a');
 
   var map = L.map('map',{
        center: [40.7,29],
        zoom:10,
        layers:[basemap2]
    });

    map.on('click', function(e){
        console.log(e.latlng);
    });
    
    var ayasofya = L.marker([41.00838639292091, 28.97994875907898]).addTo(map);
    var sultanAhmet = L.marker([41.00539885506838, 28.976558446884155]).addTo(map);
    var sureyyaOperasi = L.marker([40.98800124598191, 29.02855038642883]).addTo(map);

    ayasofya.on('click', function(e){
        map.setView(ayasofya.getLatLng(),20);
    });
    sultanAhmet.on('click', function(e){
        map.setView(sultanAhmet.getLatLng(),20);
    });

});
