const orderro = require('../Controller/ordercontroller');
const express = require('express');

const router =  express.Router();
router.post('/create',orderro.createorder);
router.get('/',orderro.getorder);
router.put('/update/:id',orderro.updateorder);
router.get('/order/:id',orderro.getorder);

module.exports = router;