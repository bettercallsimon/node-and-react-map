/**
 *  Router
 */

 const express = require('express');
 const router = express.Router();

 router.get('/', (req, res, next) => {
    console.log('someone accessed the server');
 });

 module.exports = router;