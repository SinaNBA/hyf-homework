function userLoc() {
    navigator.geolocation.getCurrentPosition(function (position) {
        alert(position.coords.latitude);
        alert(position.coords.longitude);
    });
}