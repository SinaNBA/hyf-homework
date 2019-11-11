function userLoc() {
    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById('latitude').innerText = "This is the latitude: " + position.coords.latitude;
        document.getElementById('longitude').innerText = "This is the longitude: " + position.coords.longitude;
    });
}