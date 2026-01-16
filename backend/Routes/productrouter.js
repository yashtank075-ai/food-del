const productro = require("../Controller/productcontroller");
const express = require('express');
const router = express.Router();
   router.post('/create',productro.createproduct);
   router.get('/',productro.viewproduct);
   router.put('/update/:id',productro.updateproduct);
   router.delete('/delete/:id',productro.deleteproduct);
   router.get('/menu/:id',productro.productmenu);
module.exports= router;