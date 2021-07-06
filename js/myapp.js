/*purpose of the tip calculator function is to 
get the values of sevice type billamount for 
getting the billamount,tippercent,totalpeople from the user and
calculating the stuff and return back the value*/



function tipCalculator() {
    //getting value
    const billAmount = document.getElementById("billamount").value
    const tipPercent = document.getElementById("tippercent").value
    const totalPeople = document.getElementById("people").value
    //validation
    if (billAmount === '' || tipPercent == 0) {
        alert('Please Enter the Amount Above zero and select the value from drop down')
        return
    }

    if (totalPeople === '' || totalPeople === '0') {
        alert('Please enter the minimum person')
        return;
    }

    //calculating the tip amount
    const tipCal = tipPercent * billAmount
    document.getElementById("tipamount").innerText = tipCal;


    //const billprice = +billamount + +tipcal;
    //string literals
    //calculating the total bill price
    const billPrice = +billAmount + +tipCal
    document.getElementById("totalbillamount").innerText = billPrice;
    //calculating the share for each person
    document.getElementById("person").innerText = billPrice / totalPeople;



};
//click listerner
document.getElementById("submit").onclick = function (event) {
    event.preventDefault();
    tipCalculator();


};




//getting the current loaction based on our geolocation
//validating the geolocation
if (navigator.geolocation) {
    //getting navigator and geolocation
    navigator.geolocation.getCurrentPosition(function (p) {
        //geting the latitude and longitude
        var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        var mapOptions = {
            center: LatLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP //displaying the road map
        };
        //display of map
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //setting the marker position
        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
        });
        //auto detect location
        google.maps.event.addListener(marker, "click", function (e) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
        });
    });
} else {
    //if no geolocation find
    alert('Location is Disabled / Geo Location feature is not supported in this browser.');
}



