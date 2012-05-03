mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    animate:true,
    userLocation:true
});
if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.purpose = 'Get Current Location';
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.distanceFilter = 10;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
    Titanium.Geolocation.getCurrentPosition(function(e) {
      if (e.error) {
          Ti.API.error('Error: ' + e.error);
          
      } else {
        mapview.setLocation({
          latitude:e.coords.latitude,
          longitude:e.coords.longitude,
          animate:true,
          latitudeDelta:0.04, 
          longitudeDelta:0.04
         });
      }
    });
} else {
    alert('Please enable location services');
}

Titanium.UI.currentWindow.add(mapview);