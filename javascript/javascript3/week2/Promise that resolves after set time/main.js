function func1(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('it has resolved');
        }, 1000 * resolveAfter);
    })
};

func1(4).then((data) => {
    console.log(data);

});

//Rewrite time

let p1 = new Promise((resolve) => {
    let time = 5000;
    setTimeout(resolve, time);

});


p1.then(() => {
    console.log('Called after 5 seconds');
});

//navigator.geolocation.getCurrentPosition to promises


getLocation = new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(resolve, reject);

});

getLocation.then((position) => {
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);

}).catch((error) => {
    console.log("Error", error.message);

})