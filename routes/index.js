/**
 *  Router
 */

 const express = require('express');
 const router = express.Router();

 //the not so user friendly http module used to fetch data from distant APIs
 const https = require('https');

 router.get('/', (req, res, next) => {
    
    console.log('someone accessed the server');
 });

 router.get('/api/', (req, res, next) => {
    
    //change this so it fetch data, reorganize it and send it as json
    //then well parse it on react in a different way than now
    //were still gonna need lng, lat but could provide different types or other data
    
    //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=20000&type=restaurant&keyword=cruise&key=YOUR_API_KEY

    //Bureaux de cienapps
    const location = '45.847442,-74.062830';
    const googlePlacesApiKey = 'AIzaSyB2tj-w4Lln4TVYCtzAtP0HMjqLG7ELibM';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=50000&keyword=ebenisterie&key=${googlePlacesApiKey}`;
    
    console.log('someone accesssed this API');
    
    // using the good ol' built in https module to fetch data from google places
    https.get(url, (resp) => {
        let googlePlacesResponse = '';
       
        //the 'https' module recieves 'data' in chunks (streams), which are kinda assembled here with the +=
        resp.on('data', (chunk) => {
          googlePlacesResponse += chunk;
        });
       
        //Once all the chunks are assembled. We prepare the useful data into a collection of object that are sent as JSON
        resp.on('end', () => {
            
            console.log('===============================');
            // .results is part of the returned object, sent by google places as JSON
                // TODO:
            
                //  interesting ones in geometry: name, viscinity, geometry.location.lat / geometry.location.lng
                // integrate a check if open or close
            
            // preparing the final JSON collection that will be sent
            const filteredGooglePlacesResponse = Object.values(JSON.parse(googlePlacesResponse).results).map((obj) => {
                
                
                return {
                    name: obj['name'],
                    viscinity: obj['vicinity'],
                    lng: obj['geometry']['location']['lng'],
                    lat: obj['geometry']['location']['lat']
                }
            }); 
            //add one last object, the cienapps location
            filteredGooglePlacesResponse.push({
                name: 'cienapps',
                isHome: 'cienapps',
                lng: '-74.062830',
                lat: '45.847442'
            });

            // the actual router response we send
            // expected data format: {type: 'string', lng: , lat:}
            res.json(filteredGooglePlacesResponse);
            
        });
       
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    
    
 });

 module.exports = router;