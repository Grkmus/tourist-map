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
        $('#ayaSofyaModal').modal('show');
    });
    sultanAhmet.on('click', function(e){
        map.setView(sultanAhmet.getLatLng(),20);
        $('#sultanAhmetModal').modal('show');
    });
    var ayaSofya = "http://www.planetware.com/photos-large/TR/turkey-istanbul-aya-sofya.jpg",
    imageBounds = [[41.00963318437629, 28.977679610252377], [41.00902598369244, 28.978940248489383]];
    
    var cerveveBounds = [[41.008362104541405, 28.979954123497006],
                         [41.00902598369244, 28.978940248489383],
                         [41.00962104041744, 28.978929519653317],
                         [41.00963318437629, 28.977679610252377],
                         [41.00905027182723, 28.977765440940857],
                         [41.00902598369244, 28.978940248489383 ]];
    
    var cerceve = L.polyline(cerveveBounds, {color:'gray', opacity:0}).addTo(map);
    
    var ayaSofyaImage = L.imageOverlay(ayaSofya, imageBounds,{
        opacity:0
    }).addTo(map);
    
    ayasofya.on('mouseover', function(){
        ayaSofyaImage.setOpacity(0.7);
        cerceve.setStyle({opacity:0.7});
    });
    ayasofya.on('mouseout', function(){
        ayaSofyaImage.setOpacity(0);
        cerceve.setStyle({opacity:0});
    });
   
});
