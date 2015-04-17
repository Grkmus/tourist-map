$(document).ready(function () {
	
    //------------------------------DECLARING MAP--------------------
    
   $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
	
    var baseMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
    var baseMap2 =L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
    
 
   var map = L.map('map',{
        center: [41.01047516006517, 28.97133350372314],
        zoom:14,
        layers:[baseMap]
    });

    map.on('click', function(e){
        console.log(e.latlng);
    });
    
    // ---------------------------DECLARING GEOJSON STYLES -------------------
    
    var regionStyle1 = function(){
        return {
            color: "#6fcc06",
            stroke: false,
            fillOpacity: 0.8
        };
    };
    
    var regionStyle2 = function(){
        return {
            color: "#DF3A01",
            stroke: false,
            fillOpacity: 0.8
        };
    };
    var regionStyle3 = function(){
        return {
            color: "#045FB4",
            stroke: false,
            fillOpacity: 0.8
        };
    };
    
    var regionStyleHover = function(){
        return {
            color: "#B40404",
            stroke: true,
            fillOpacity: 0
        };
    };
    
    var placeStyle1 = function(){
        return {
            color: "#FF8000",
            stroke: false,
            fillOpacity: 0.8
        };
    };
    var placeStyle2 = function(){
        return {
            stroke: true,
            color:"#FF4000",
            weight: 7,
            opacity: 1,
            fillColor: "#FF8000",
            fillOpacity: 1,
            lineCap: "round",
            
        };
    };
    // ---------------------------DECLARING REGION PROPERTIES: MARKERS,GEOJSONs etc -------------------
    
    var historicalRegionGeoJsonFeature = L.geoJson(historicalRegionGeoJson,{
        style:regionStyle1
    }).addTo(map);  
    
    var modernRegionGeoJsonFeature = L.geoJson(modernRegionGeoJson,{
        style:regionStyle2
    }).addTo(map);
    
    var kadikoyRegionGeoJsonFeature = L.geoJson(kadikoyRegionGeoJson,{
        style:regionStyle3
    }).addTo(map); 
    
    // ---------------------------DECLARING PLACE PROPERTIES: MARKERS,GEOJSONs etc -------------------
    
    
    // ** Ayasofya
    
    var ayasofyaMarker = L.marker([41.00838639292091, 28.97994875907898],{opacity:0.0}).addTo(map);
    
    
    var ayaSofyaGeojsonFeature = L.geoJson(ayaSofyaGeoJson,{
        
    style: placeStyle1
    
    });
    
    
    /////////////////////////////
    // **SULTANAHMET //
    /////////////////////
    
    var sultanahmetMarker = L.marker([41.00539885506838, 28.976558446884155],{opacity:0.0}).addTo(map);
    
    
    var sultanahmetGeoJsonFeature = L.geoJson(sultanahmetGeoJson,{
        
        style: placeStyle1
        
    });
    

    // ** Topkapı
    
    var topkapiMarker = L.marker([41.01262862585457, 28.984293937683105],{opacity:0.0}).addTo(map);
    
    var topkapiGeoJsonFeature = L.geoJson(topkapiGeoJson,{
        style: placeStyle1
    });
     
    
    
    //--------------------DECLARING PLACE CLASS---------------------
    
    function Region(geoJson,regionStyle){
        
        this.geoJson = geoJson;
        
        var geoJsonHover = function() {
            geoJson.on('mouseover',function(){
                geoJson.setStyle(regionStyleHover);
            });
            geoJson.on('mouseout',function(){
                geoJson.setStyle(regionStyle);
            });
        
        };
        
        
        return geoJsonHover();
    
    };
    
    var placeList = [ayaSofyaGeojsonFeature,topkapiGeoJsonFeature,sultanahmetGeoJsonFeature];
    
   
    function Place(modal,marker,geoJson,panel){
        this.modal = modal;
        this.marker = marker;
        this.geoJson = geoJson;
        this.panel = panel;
        
        var markerHover = function() {
            marker.on('mouseover',function(){
                this.setOpacity(0);
            });
            marker.on('mouseout',function(){
                this.setOpacity(0.0);
            });
        };
       
        var panelHover = function(){
                panel.hover(
                    function() {
                 geoJson.setStyle(placeStyle2);

             },     function() {
                 geoJson.setStyle(placeStyle1);
            }
            );
        
        };
        
         var geoJsonHover = function() {
            geoJson.on('mouseover',function(){
                geoJson.setStyle(placeStyle2);
            });
            geoJson.on('mouseout',function(){
                geoJson.setStyle(placeStyle1);
            });
        
        };
        
        var sidePanelClick = function() {
            panel.click(function() {
                map.setView(marker.getLatLng(),16);
            });
        };
        
        var modalOpens = function() {
            geoJson.on('click', function() {
                modal.modal('show');
            });
        
        };
        
        return [panelHover(), markerHover(), geoJsonHover(), sidePanelClick(), modalOpens()];
       
    }
    
    
    
    var historicalRegion = new Region(historicalRegionGeoJsonFeature,regionStyle1);
        
    var modernRegion = new Region(modernRegionGeoJsonFeature,regionStyle2);
    var kadikoyRegion = new Region(kadikoyRegionGeoJsonFeature,regionStyle3);
    var ayasofya= new Place($('#ayaSofyaModal'),ayasofyaMarker,ayaSofyaGeojsonFeature,$('#ayaSofyaPanel'));
    var sultanahmet = new Place($('#sultanahmetModal'),sultanahmetMarker,sultanahmetGeoJsonFeature,$('#sultanahmetPanel')); 
    var topkapi = new Place($('#topkapiModal'),topkapiMarker,topkapiGeoJsonFeature,$('#topkapiPanel'));
    
   historicalRegionGeoJsonFeature.on('click',function() {
        for(var i=0;i<placeList.length;i++){
            placeList[i].addTo(map);
            map.fitBounds(placeList[i].getBounds());
            setInterval(function(){console.log(i)},1000);
            //setTimeout(function(){console.log(i)},1000);
        };
   });
     
    
   
});
