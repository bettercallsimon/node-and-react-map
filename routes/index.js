/**
 *  Router
 */

 const express = require('express');
 const router = express.Router();

 router.get('/', (req, res, next) => {
    console.log('someone accessed the server');
 });

 router.get('/api/', (req, res, next) => {
    
    res.json([
        {type: 'building', lng: 10, lat: 15},
        {type: 'building', lng: 4, lat: 5},
        {type: 'building', lng: 31, lat: 12},
        {type: 'unit', lng: 16, lat: 14},
        {type: 'building', lng: 12, lat: 44},
        {type: 'building', lng: 44, lat: 52}
    ]);
 });

 router.get('/api2/', (req, res, next) => {
    
    res.send([
        ['building', 30, 15],
        ['unit', 27, 12],
        ['building', 14, 22]
    ]);
 });

 module.exports = router;