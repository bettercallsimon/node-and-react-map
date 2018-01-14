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
        {type: 'unit', lng: 10, lat: 15},
        {type: 'building', lng: 4, lat: 5},
        {type: 'unit', lng: 31, lat: 12},
        {type: 'unit', lng: 16, lat: 14},
        {type: 'building', lng: 12, lat: 44},
        {type: 'unit', lng: 44, lat: 52},
        {type: 'diego', lng: 40, lat: 52}
    ]);
 });

 module.exports = router;