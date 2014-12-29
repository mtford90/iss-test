var iss = require('iss'),
    stream = iss.locationStream(25544, 10);

stream.on('data', function (buffer) {
    var rawJson = buffer.toString('utf8'),
        data    = JSON.parse(rawJson);
    console.log();
    console.log('Latitude: ' + data.latitude);
    console.log('Longitude: ' + data.longitude);
    console.log('Velocity: ' + data.velocity);
    // And so on...
});
