var iss = require('iss'),
    stream = iss.changeInLocationStream(25544, 10);

stream.on('data', function (buffer) {
    var rawJson = buffer.toString('utf8'),
           data = JSON.parse(rawJson);
    console.log();
    console.log('Latitude: ' + data.latPerSec + '/s');
    console.log('Longitude: ' + data.longPerSec + '/s');
});
