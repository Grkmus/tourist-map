$(document).ready(function () {

    //------------------------------DECLARING MAP--------------------



    var baseMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    });
    var baseMap2 = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });


    var map = L.map('map', {
        center: [41.01047516006517, 28.97133350372314],
        zoom: 10,
        layers: [baseMap]
    });

    map.on('click', function (e) {
        console.log(e.latlng);
    });
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
                      [28.979130685329434, 41.008149580838854],
                      [28.979237973690033, 41.00827304707329],
                      [28.979095816612244, 41.00834388825089],
                      [28.9791789650917, 41.008441041742046],
                      [28.97906899452209, 41.00849973857353],
                      [28.979634940624234, 41.00914337626098],
                      [28.97981196641922, 41.009078607973166],
                      [28.97988706827164, 41.00915349630019],
                      [28.98088216781616, 41.00856653145613],
                      [28.980817794799805, 41.008509858711626],
                      [28.98087412118912, 41.008487594405814],
                      [28.980267941951748, 41.007928960270114],
                      [28.980233073234558, 41.00795324880929],
                      [28.980104327201843, 41.007801445292614],
                      [28.979919254779816, 41.00790669576802],
                      [28.979972898960114, 41.00797753733951],
                      [28.979618847370148, 41.00816374910702],
                      [28.97952497005463, 41.00809493177597],
                      [28.979283571243286, 41.00820422985639],
                      [28.97918701171875, 41.00811719621448],
                      [28.979130685329434, 41.008149580838854]
                    ]
                  ]
              }

          }
        ]
    };
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
                      [28.975925445556637, 41.00556280882898],
                      [28.976461887359616, 41.00601620969745],
                      [28.97744625806808, 41.0053442037242],
                      [28.976904451847073, 41.00489079823207],
                      [28.975925445556637, 41.0055628088289]
                    ]
                  ]
              }
          }
        ]
    };
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
                      [28.98372530937195, 41.01100948521007],
                      [28.981890678405758, 41.01182715620899],
                      [28.982577323913574, 41.01265291266133],
                      [28.982309103012085, 41.01278244214613],
                      [28.984186649322506, 41.01468487711532],
                      [28.986085653305054, 41.013980577807814],
                      [28.984165191650387, 41.0108556647792],
                      [28.98372530937195, 41.01100948521007]
                    ]
                  ]
              }
          }
        ]
    };
    var historicalRegionGeoJson = {
        "type": "FeatureCollection",
        "features": [
          {
              "type": "Feature",
              "properties": {},
              "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [28.96219253540039, 41.0225207108638],
                      [28.963308334350582, 41.02057802907367],
                      [28.965883255004883, 41.01908860089484],
                      [28.9724063873291, 41.01785817829983],
                      [28.973951339721676, 41.01759913903529],
                      [28.97729873657227, 41.01617440487126],
                      [28.981075286865238, 41.016044882055596],
                      [28.985280990600586, 41.017016296965494],
                      [28.98682594299316, 41.01552678824619],
                      [28.987340927124023, 41.01125235884344],
                      [28.985967636108395, 41.006589028655824],
                      [28.982620239257812, 41.00438678578724],
                      [28.979358673095703, 41.002119694195144],
                      [28.974380493164062, 41.00199014374863],
                      [28.969230651855465, 41.002767442608],
                      [28.963651657104496, 41.00296176589039],
                      [28.95644187927246, 41.003803826826505],
                      [28.95172119140625, 41.00224924438704],
                      [28.94674301147461, 41.001666266518185],
                      [28.943738937377926, 41.00134238769616],
                      [28.941335678100586, 41.00205491900372],
                      [28.93876075744629, 41.00205491900372],
                      [28.936443328857422, 41.00199014374863],
                      [28.93627166748047, 41.002767442608],
                      [28.936100006103516, 41.00522882851541],
                      [28.937044143676758, 41.009568416569934],
                      [28.938674926757812, 41.01157618896193],
                      [28.937902450561523, 41.012871493519214],
                      [28.93077850341797, 41.015656312080544],
                      [28.923826217651364, 41.01921811772572],
                      [28.920822143554688, 41.022909240345506],
                      [28.924942016601562, 41.029513890837364],
                      [28.932323455810547, 41.034499315650045],
                      [28.935585021972656, 41.036376845311295],
                      [28.938846588134766, 41.03954910133338],
                      [28.941335678100586, 41.04084385577408],
                      [28.94408226013184, 41.03896645352545],
                      [28.94597053527832, 41.035988395292115],
                      [28.94665718078613, 41.033204436407814],
                      [28.949575424194336, 41.030808842666495],
                      [28.952665328979492, 41.02944914257737],
                      [28.95644187927246, 41.02802466474811],
                      [28.95936012268066, 41.02556413045771],
                      [28.96219253540039, 41.0225207108638]
                    ]
                  ]
              }
          }
        ]
    };
    var kadikoyRegionGeoJson = {
        "type": "FeatureCollection",
        "features": [
          {
              "type": "Feature",
              "properties": {
                  "stroke": "#555555",
                  "stroke-width": 0,
                  "stroke-opacity": 1,
                  "fill": "#04daff",
                  "fill-opacity": 0.5
              },
              "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [29.096088409423828, 40.95092745361195],
                      [29.098362922668457, 40.95186741590765],
                      [29.096388816833496, 40.95322871688706],
                      [29.092955589294434, 40.95452516791461],
                      [29.0903377532959, 40.95621051618863],
                      [29.078536033630368, 40.96139593331231],
                      [29.074587821960446, 40.96395608279436],
                      [29.05797958374023, 40.97289962292462],
                      [29.050984382629395, 40.976139736843145],
                      [29.047422409057617, 40.97753293690121],
                      [29.042186737060543, 40.98099960933604],
                      [29.03707981109619, 40.99055631399581],
                      [29.032230377197266, 40.99628967199668],
                      [29.03609275817871, 40.99881607826166],
                      [29.042873382568356, 41.00412769355242],
                      [29.053859710693356, 41.013713427824925],
                      [29.055747985839844, 41.01520297754613],
                      [29.047508239746097, 41.02148462104005],
                      [29.045448303222656, 41.02847791103656],
                      [29.044761657714844, 41.034499315650045],
                      [29.03815269470215, 41.04175016872783],
                      [29.015321731567383, 41.02763616544628],
                      [29.01180267333984, 41.02556413045771],
                      [29.009227752685547, 41.025887890222464],
                      [29.006309509277344, 41.022067423571514],
                      [29.008283615112305, 41.018505772004396],
                      [29.01128768920898, 41.01241813982099],
                      [29.008455276489258, 41.0087911979279],
                      [29.010772705078125, 41.00075940180577],
                      [29.01566505432129, 40.99136614056235],
                      [29.01952743530273, 40.984952041582275],
                      [29.019441604614258, 40.98002766348274],
                      [29.021759033203125, 40.97775973412575],
                      [29.03214454650879, 40.980675628976336],
                      [29.034547805786133, 40.98158276997307],
                      [29.03823852539062, 40.9776301358072],
                      [29.038410186767575, 40.97529732253331],
                      [29.035749435424805, 40.97406608226784],
                      [29.03351783752441, 40.97121470079643],
                      [29.031372070312496, 40.96810396228028],
                      [29.03351783752441, 40.96583562298984],
                      [29.037637710571293, 40.964798641915564],
                      [29.04304504394531, 40.96570600124669],
                      [29.046649932861325, 40.96836319609144],
                      [29.04828071594238, 40.96894646844283],
                      [29.050941467285153, 40.96842800438508],
                      [29.052486419677734, 40.96797434499278],
                      [29.053516387939453, 40.96661334810203],
                      [29.054889678955075, 40.96544675699655],
                      [29.057292938232422, 40.96369683166984],
                      [29.061326980590824, 40.96259500302888],
                      [29.062185287475586, 40.962076489068025],
                      [29.06630516052246, 40.96337276633205],
                      [29.069223403930664, 40.962400560770945],
                      [29.07111167907715, 40.95896531975656],
                      [29.07111167907715, 40.95844677728032],
                      [29.0753173828125, 40.95669666634871],
                      [29.07883644104004, 40.95507615189191],
                      [29.08209800720215, 40.95345559765472],
                      [29.08347129821777, 40.9537148890059],
                      [29.08501625061035, 40.954492756949186],
                      [29.08681869506836, 40.95468722250293],
                      [29.0892219543457, 40.952483246017934],
                      [29.089994430541992, 40.951381230184055],
                      [29.093513488769528, 40.95228877397209],
                      [29.096088409423828, 40.9509274536119]
                    ]
                  ]
              }
          }
        ]
    };
    var modernRegionGeoJson = {
        "type": "FeatureCollection",
        "features": [
          {
              "type": "Feature",
              "properties": {
                  "stroke": "#555555",
                  "stroke-width": 0,
                  "stroke-opacity": 1,
                  "fill": "#6fcc06",
                  "fill-opacity": 0.5
              },
              "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [28.97056102752686, 41.02216455682533],
                      [28.967256546020504, 41.02485185337225],
                      [28.969016075134274, 41.02679440909555],
                      [28.971762657165527, 41.02863978395488],
                      [28.971891403198242, 41.03045273345242],
                      [28.9744234085083, 41.03323680869927],
                      [28.974165916442868, 41.03466117376452],
                      [28.983650207519528, 41.03757455177359],
                      [28.986783027648922, 41.040746750074526],
                      [28.986954689025875, 41.04670230123087],
                      [28.98682594299316, 41.05864414643029],
                      [28.988285064697262, 41.06110344425624],
                      [28.995580673217773, 41.06653946051238],
                      [29.006567001342777, 41.06699244158407],
                      [29.011459350585934, 41.06718657537385],
                      [29.013433456420895, 41.06608647632021],
                      [29.014806747436523, 41.06466279140132],
                      [29.016952514648438, 41.05890302421599],
                      [29.02596473693848, 41.05353110138673],
                      [29.029827117919922, 41.04984169548293],
                      [29.030170440673828, 41.048676576951394],
                      [29.01901245117187, 41.04446903270626],
                      [29.00742530822754, 41.040973329817284],
                      [28.996610641479492, 41.03721847915574],
                      [28.992319107055664, 41.034434572292845],
                      [28.98759841918945, 41.02789516523553],
                      [28.976268768310543, 41.02180840086087],
                      [28.97056102752686, 41.0221645568253]
                    ]
                  ]
              }
          }
        ]
    };


    // ---------------------------DECLARING GEOJSON STYLES -------------------

    var regionStyle1 = function () {
        return {
            color: "#6fcc06",
            stroke: false,
            fillOpacity: 0.8
        };
    };

    var regionStyle2 = function () {
        return {
            color: "#DF3A01",
            stroke: false,
            fillOpacity: 0.8
        };
    };
    var regionStyle3 = function () {
        return {
            color: "#045FB4",
            stroke: false,
            fillOpacity: 0.8
        };
    };

    var regionStyleHover = function () {
        return {
            color: "#B40404",
            stroke: true,
            fillOpacity: 0
        };
    };

    var placeStyle1 = function () {
        return {
            color: "#FF8000",
            stroke: false,
            fillOpacity: 0.8
        };
    };
    var placeStyle2 = function () {
        return {
            stroke: true,
            color: "#FF4000",
            weight: 7,
            opacity: 1,
            fillColor: "#FF8000",
            fillOpacity: 1,
            lineCap: "round",

        };
    };
    // ---------------------------DECLARING REGION PROPERTIES: MARKERS,GEOJSONs etc -------------------

    var historicalRegionGeoJsonFeature = L.geoJson(historicalRegionGeoJson, {
        style: regionStyle1
    }).addTo(map);

    var modernRegionGeoJsonFeature = L.geoJson(modernRegionGeoJson, {
        style: regionStyle2
    }).addTo(map);

    var kadikoyRegionGeoJsonFeature = L.geoJson(kadikoyRegionGeoJson, {
        style: regionStyle3
    }).addTo(map);

    // ---------------------------DECLARING PLACE PROPERTIES: MARKERS,GEOJSONs etc -------------------


    // ** Ayasofya

    var ayasofyaMarker = L.marker([41.00838639292091, 28.97994875907898], { opacity: 0.0 }).addTo(map);


    var ayaSofyaGeojsonFeature = L.geoJson(ayaSofyaGeoJson, {

        style: placeStyle1

    });


    /////////////////////////////
    // **SULTANAHMET //
    /////////////////////

    var sultanahmetMarker = L.marker([41.00539885506838, 28.976558446884155], { opacity: 0.0 }).addTo(map);


    var sultanahmetGeoJsonFeature = L.geoJson(sultanahmetGeoJson, {

        style: placeStyle1

    });


    // ** Topkapı

    var topkapiMarker = L.marker([41.01262862585457, 28.984293937683105], { opacity: 0.0 }).addTo(map);

    var topkapiGeoJsonFeature = L.geoJson(topkapiGeoJson, {
        style: placeStyle1
    });



    //--------------------DECLARING PLACE CLASS---------------------

    function Region(geoJson, regionStyle) {

        this.geoJson = geoJson;

        var geoJsonHover = function () {
            geoJson.on('mouseover', function () {
                geoJson.setStyle(regionStyleHover);
            });
            geoJson.on('mouseout', function () {
                geoJson.setStyle(regionStyle);
            });

        };


        return geoJsonHover();

    };

    var placeList = [ayaSofyaGeojsonFeature, topkapiGeoJsonFeature, sultanahmetGeoJsonFeature];


    function Place(modal, marker, geoJson, panel) {
        this.modal = modal;
        this.marker = marker;
        this.geoJson = geoJson;
        this.panel = panel;

        var markerHover = function () {
            marker.on('mouseover', function () {
                this.setOpacity(0);
            });
            marker.on('mouseout', function () {
                this.setOpacity(0.0);
            });
        };

        var panelHover = function () {
            panel.hover(
                function () {
                    geoJson.setStyle(placeStyle2);

                }, function () {
                    geoJson.setStyle(placeStyle1);
                }
        );

        };

        var geoJsonHover = function () {
            geoJson.on('mouseover', function () {
                geoJson.setStyle(placeStyle2);
            });
            geoJson.on('mouseout', function () {
                geoJson.setStyle(placeStyle1);
            });

        };

        var sidePanelClick = function () {
            panel.click(function () {
                map.setView(marker.getLatLng(), 16);
            });
        };

        var modalOpens = function () {
            geoJson.on('click', function () {
                modal.modal('show');
            });

        };

        return [panelHover(), markerHover(), geoJsonHover(), sidePanelClick(), modalOpens()];

    }



    var historicalRegion = new Region(historicalRegionGeoJsonFeature, regionStyle1);

    var modernRegion = new Region(modernRegionGeoJsonFeature, regionStyle2);
    var kadikoyRegion = new Region(kadikoyRegionGeoJsonFeature, regionStyle3);
    var ayasofya = new Place($('#ayaSofyaModal'), ayasofyaMarker, ayaSofyaGeojsonFeature, $('#ayaSofyaPanel'));
    var sultanahmet = new Place($('#sultanahmetModal'), sultanahmetMarker, sultanahmetGeoJsonFeature, $('#sultanahmetPanel'));
    var topkapi = new Place($('#topkapiModal'), topkapiMarker, topkapiGeoJsonFeature, $('#topkapiPanel'));

    historicalRegionGeoJsonFeature.on('click', function () {
        for (var i = 0; i < placeList.length; i++) {
            placeList[i].addTo(map);
            map.fitBounds(placeList[i].getBounds());
            setInterval(function () { console.log(i) }, 1000);
            //setTimeout(function(){console.log(i)},1000);
        };
    });



});
