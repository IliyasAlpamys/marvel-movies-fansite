var map;
function initialize() 
{
	var mapProp = {
	center: new google.maps.LatLng(40.761073, -73.982102), 
	zoom: 12,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById("map"), mapProp);
  
    
    var image = {url:'images/iconMarker.png', anchor: new google.maps.Point(10, 10)};
		
    Marker = new google.maps.Marker({
        position: {lat: 40.761073, lng: -73.982102},
        map: map,
        icon: image
    });
	Marker.addListener('click', toggleBounce);
    
}
function toggleBounce() 
{
    if (Marker.getAnimation() !== null) 
	{
        Marker.setAnimation(null);
    } 
	else
	{
       Marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
google.maps.event.addDomListener(window, 'load', initialize);

