const websitero = require('../Controller/websitecontroller');
const express = require('express');
const router = express.Router();
router.post('/create',websitero.createweb);
router.get('/',websitero.getweb);
router.put('/update/:id',websitero.updateweb);
router.delete('/delete/:id',websitero.deleteweb);


module.exports = router;