// Geo Location

// The Geolocation API allows the user to provide their location to web applications if they so desire.
// For privacy reasons, the user is asked for permission to report location information.

navigator.geolocation.getCurrentPosition(function (position) {
    let altitude = position.coords.altitude;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let accuracy = position.coords.accuracy;
    let speed = position.coords.speed;
    let heading = position.coords.heading;

    document.write("altitude: " + altitude + "<br>");
    document.write("latitude: " + latitude + "<br>");
    document.write("longitude: " + longitude + "<br>");
    document.write("accuracy: " + accuracy + "<br>");
    document.write("speed: " + speed + "<br>");
    document.write("heading: " + heading + "<br>");
});