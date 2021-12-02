//This checks whether we are indeed getting the request library
const request = require('request');
//console.log(request);

const breedFetcher = function() {
    let breed = process.argv[2];
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
        //console.log('error', error);
        //console.log('status code', response && response.statusCode);
        //console.log('body', body);
        //console.log(typeof body);
        const data = JSON.parse(body);
        //console.log(data);
        //console.log(typeof data);
        return console.log(data[0]['description'])
    })
}

breedFetcher();