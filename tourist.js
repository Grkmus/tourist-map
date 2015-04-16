$(document).ready(function () {
	
    //------------------------------DECLARING MAP--------------------
    
  
	
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
    
    // ---------------------------DECLARING PLACE PROPERTIES: MARKERS,GEOJSONs etc -------------------
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
    
    // ** Ayasofya
    
    var ayasofyaMarker = L.marker([41.00838639292091, 28.97994875907898],{opacity:0.0}).addTo(map);
    
    var ayaSofyaGeoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {}, 
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [28.979130685329434,41.008149580838854],
            [28.979237973690033,41.00827304707329],
            [28.979095816612244,41.00834388825089],
            [28.9791789650917,41.008441041742046],
            [28.97906899452209,41.00849973857353],
            [28.979634940624234,41.00914337626098],
            [28.97981196641922,41.009078607973166],
            [28.97988706827164,41.00915349630019],
            [28.98088216781616,41.00856653145613],
            [28.980817794799805,41.008509858711626],
            [28.98087412118912,41.008487594405814],
            [28.980267941951748,41.007928960270114],
            [28.980233073234558,41.00795324880929],
            [28.980104327201843,41.007801445292614],
            [28.979919254779816,41.00790669576802],
            [28.979972898960114,41.00797753733951],
            [28.979618847370148,41.00816374910702],
            [28.97952497005463,41.00809493177597],
            [28.979283571243286,41.00820422985639],
            [28.97918701171875,41.00811719621448],
            [28.979130685329434,41.008149580838854]
          ]
        ]
      }
        
    }
  ]
}
    var ayaSofyaGeojsonFeature = L.geoJson(ayaSofyaGeoJson,{
        
    style: placeStyle1
    
    }).addTo(map);
    var ayaSofyaImage = L.imageOverlay("http://www.planetware.com/photos-large/TR/turkey-istanbul-aya-sofya.jpg", [[41.01542964520331, 28.96815776824951], [41.00934172874638, 28.97716999053955]],{
        opacity:0 /*Because i want it to appear when i hover to marker*/
    }).addTo(map);
    
    /////////////////////////////
    // **SULTANAHMET //
    /////////////////////
    
    var sultanahmetMarker = L.marker([41.00539885506838, 28.976558446884155],{opacity:0.0}).addTo(map);
    var sultanahmetGeoJson = {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [28.975925445556637,41.00556280882898],
                    [28.976461887359616,41.00601620969745],
                    [28.97744625806808,41.0053442037242],
                    [28.976904451847073,41.00489079823207],
                    [28.975925445556637,41.0055628088289]
                  ]
                ]
              }
            }
          ]
    };
    
    var sultanahmetGeoJsonFeature = L.geoJson(sultanahmetGeoJson,{
        
        style: placeStyle1
        
    }).addTo(map);
    
    var sultanahmetImage = L.imageOverlay("http://www.planetware.com/photos-large/TR/turkey-istanbul-blue-mosque.jpg", [[41.00762535277516, 28.96270751953125], [41.0014071635879, 28.972663879394528]],{
        opacity:0 /*Because i want it to appear when i hover to marker*/
    }).addTo(map);
    
    // ** Topkapı
    
    var topkapiMarker = L.marker([41.01262862585457, 28.984293937683105],{opacity:0.0}).addTo(map);
    var topkapiGeoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [28.98372530937195,41.01100948521007],
            [28.981890678405758,41.01182715620899],
            [28.982577323913574,41.01265291266133],
            [28.982309103012085,41.01278244214613],
            [28.984186649322506,41.01468487711532],
            [28.986085653305054,41.013980577807814],
            [28.984165191650387,41.0108556647792],
            [28.98372530937195,41.01100948521007]
          ]
        ]
      }
    }
  ]
};
    var topkapiGeoJsonFeature = L.geoJson(topkapiGeoJson,{
        style: placeStyle1
    }).addTo(map);
     var topkapiImage = L.imageOverlay("http://www.planetware.com/photos-large/TR/turkey-istanbul-interior-topkapi-palace.jpg", [[41.01695153641716, 28.98880004882812], [41.009697952118955,28.9984130859375]],{
        opacity:0 /*Because i want it to appear when i hover to marker*/
    }).addTo(map);
    
    //--------------------DECLARING PLACE CLASS---------------------
    
    function Place(modal,marker,geoJson,image,panel){
        this.modal = modal;
        this.marker = marker;
        this.geoJson = geoJson;
        this.image = image;
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
    
    
    
    
    var ayasofya= new Place($('#ayaSofyaModal'),ayasofyaMarker,ayaSofyaGeojsonFeature,ayaSofyaImage,$('#ayaSofyaPanel'));
    var sultanahmet = new Place($('#sultanahmetModal'),sultanahmetMarker,sultanahmetGeoJsonFeature, sultanahmetImage,$('#sultanahmetPanel'));       var topkapi = new Place($('#topkapiModal'),topkapiMarker,topkapiGeoJsonFeature, topkapiImage, $('#topkapiPanel'));

    
    
    /*
    var onClickSetView = function(){
        map.setView(this.getLatLng(),20);
    };
    var onClickModal = function(){
        
    };

    ayasofya.on('click', function(){
        map.setView(ayasofya.getLatLng(),20);
        $('#ayaSofyaModal').modal('show');
    });
    sultanAhmet.on('click', function(e){
        map.setView(sultanAhmet.getLatLng(),20);
        $('#sultanAhmetModal').modal('show');
    });
   
    
    var cerveveBounds = [[41.008362104541405, 28.979954123497006],
                         [41.00902598369244, 28.978940248489383],
                         [41.00962104041744, 28.978929519653317],
                         [41.00963318437629, 28.977679610252377],
                         [41.00902598369244, 28.97767424583435],
                         [41.00902598369244, 28.978940248489383]];
    
    var cerceve = L.polyline(cerveveBounds, {color:'green', opacity:0, clickable: false}).addTo(map);
        cerceve.bringToFront();
   
    
    ayasofya.on('mouseover', function() {
        ayaSofyaImage.setOpacity(0.7);
        cerceve.setStyle({opacity:0.7});
    });
    ayasofya.on('mouseout', function() {
        ayaSofyaImage.setOpacity(0);
        cerceve.setStyle({opacity:0});
    });
    
    //SIDE PANEL CLICK EVENTS
    
    $('#ayaSofyaPanel').click(function(){
        map.setView(ayasofya.getLatLng(),20);
    });
     $('#sultanahmetPanel').click(function(){
        map.setView(sultanAhmet.getLatLng(),20);
    });  
    $('#topkapiPanel').click(function(){
        map.setView(topkapi.getLatLng(),20);
    });
   */
});
