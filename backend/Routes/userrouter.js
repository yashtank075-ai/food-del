const userco = require('../Controller/usercontroller');
const express = require('express');
const router =  express.Router();
router.post("/create",userco.createuser);
 router.get("/",userco.viewuser);
 router.put("/update/:id",userco.updatedata);
 router.delete("/delete/:id",userco.deletedata);
 router.post("/login",userco.login);

 module.exports = router;