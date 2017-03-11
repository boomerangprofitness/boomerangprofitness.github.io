function initMap() {
  var myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var myLatLng = {lat: 52.059329, lng: -1.289658};

  var map = new google.maps.Map(document.getElementById('googlemap'), {
    zoom: 15,
    center: myLatLng,
    scaleControl: true,
    streetViewControl: false,
    scrollwheel: false,
    styles: myStyles
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Boomerang Pro Fitness'

  });
}
