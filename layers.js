var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kec_Girisubo_1 = new ol.format.GeoJSON();
var features_Kec_Girisubo_1 = format_Kec_Girisubo_1.readFeatures(json_Kec_Girisubo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kec_Girisubo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kec_Girisubo_1.addFeatures(features_Kec_Girisubo_1);
var lyr_Kec_Girisubo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kec_Girisubo_1, 
                style: style_Kec_Girisubo_1,
                popuplayertitle: 'Kec_Girisubo',
                interactive: true,
    title: 'Kec_Girisubo<br />\
    <img src="styles/legend/Kec_Girisubo_1_0.png" /> <br />\
    <img src="styles/legend/Kec_Girisubo_1_1.png" /> Balong<br />\
    <img src="styles/legend/Kec_Girisubo_1_2.png" /> Jepitu<br />\
    <img src="styles/legend/Kec_Girisubo_1_3.png" /> Jerukwudel<br />\
    <img src="styles/legend/Kec_Girisubo_1_4.png" /> Karangawen<br />\
    <img src="styles/legend/Kec_Girisubo_1_5.png" /> Nglindur<br />\
    <img src="styles/legend/Kec_Girisubo_1_6.png" /> Pucung<br />\
    <img src="styles/legend/Kec_Girisubo_1_7.png" /> Songbanyu<br />\
    <img src="styles/legend/Kec_Girisubo_1_8.png" /> Tileng<br />' });
var format_Pemerintahan_2 = new ol.format.GeoJSON();
var features_Pemerintahan_2 = format_Pemerintahan_2.readFeatures(json_Pemerintahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_2.addFeatures(features_Pemerintahan_2);
var lyr_Pemerintahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_2, 
                style: style_Pemerintahan_2,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_2.png" /> Pemerintahan'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kec_Girisubo_1.setVisible(true);lyr_Pemerintahan_2.setVisible(true);lyr_Jalan_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kec_Girisubo_1,lyr_Pemerintahan_2,lyr_Jalan_3];
lyr_Kec_Girisubo_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', });
lyr_Pemerintahan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', });
lyr_Jalan_3.set('fieldAliases', {'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Kec_Girisubo_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', });
lyr_Pemerintahan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Kec_Girisubo_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'luas': 'hidden field', });
lyr_Pemerintahan_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'REMARK': 'inline label - always visible', });
lyr_Jalan_3.set('fieldLabels', {'REMARK': 'inline label - always visible', 'SHAPE_Leng': 'hidden field', });
lyr_Jalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});