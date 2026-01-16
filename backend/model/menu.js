const mongoose = require('mongoose');
const menuschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
module.exports = mongoose.model("menu",menuschema);