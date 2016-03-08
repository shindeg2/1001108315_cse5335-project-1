var map = null;
var count1=0;
	var count2=0;
function myfunction(){
	
  var mapCanvas = document.getElementById('map-canvas');
     var mapOptions = {
      center: new google.maps.LatLng(37.09024,	-95.712891),
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP
          }
     map = new google.maps.Map(mapCanvas, mapOptions);
 $.ajax({
  type:'GET',
  url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&limit=10&api_key=e3Zeq5rgdJs2bzLn5hH45ZrphL4cOZU7JhkcZ4aF&format=JSON&state=TX',
  contentType:'application/json ; charset=utf-8',
  dataType: 'json',
  success: function(response) {

var output = document.getElementById("demo");
var str = JSON.stringify(response,undefined,2);

var tableData = '<table><tr><td>Id</td><td>Name</td><td>City</td><td>State</td><td>Zipcode</td><td>Fuel_Type_Code</td><td>Latitude</td><td>Longitude</td><td>Access_Days_Time</td><td>Station_Phone</td><td>Geocode_status</td></tr>';

$.each(response.fuel_stations, function(index, data) {
	
 tableData += '<tr><td>'+data.id+'</td><td>'+data.station_name+'</td><td>'+data.city+'</td><td>'+data.state+'</td><td>'+data.zip+'</td><td>'+data.fuel_type_code+'</td><td>'+data.latitude+'</td><td>'+data.longitude+'</td><td>'+data.access_days_time+'</td><td>'+data.station_phone+'</td><td>'+data.geocode_status+'</td></tr>';
});

$('#table_data').html(tableData);

$.each(response.fuel_stations, function(index, data) {
  addMarker(data.latitude, data.longitude);
});

$.each(response.fuel_stations, function(index, data) {
  count(data.geocode_status);
});

}
});
}
function addMarker(lat,lng) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat,lng),
            map: map
			
        });
}

function count(geocode_status){
	console.log("hello");
	
		if(geocode_status==="GPS")
			count1=count1+1;
		else
			count2=count2+1;

		
	var pieData = [
   {
      value: count1,
      label: 'GPS',
      color: '#811BD6'
   },
   {
      value: count2,
      label: '200-8',
      color: '#9CBABA'
   },
];

var myPieChart = new Chart(document.getElementById("skills").getContext("2d")).Pie(pieData);



}
