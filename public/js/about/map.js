function initMap(){var e={lat:47.2783295666323,lng:39.72452371391791},l={lat:47.27753187991772,lng:39.72419112000007},t=new google.maps.Map(document.getElementById("map"),{zoom:18,center:e,disableDefaultUI:!0,scrollwheel:!1,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#4369aa"}]}]}),a=new google.maps.Marker({position:l,map:t,icon:"../../../assets/img/map/map_marker_n.png"}),i=new google.maps.InfoWindow({content:"г.Ростов-на-Дону"});a.addListener("click",function(){i.open(t,a)})}