const menuro = require('../Controller/menucontroller');
const express = require('express');
const router= express.Router();

router.post('/create',menuro.createmenu);
router.get('/',menuro.getmenu);
router.put('/update/:id',menuro.updatemenu);
router.delete('/delete/:id',menuro.deletemenu);


module.exports= router;