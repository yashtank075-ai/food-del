const mongoose = require('mongoose');
const websiteschema = new mongoose.Schema({
    menu:{
       type:String,
       required:true
    },
    logo:{
       type:String,
       required:true
    },
    email:{
       type:String,
       required:true
    },
    address:{
       type:String,
       required:true
    },
    socialicon:{
       facebook:String,
       linkdin:String,
       twitter:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model("website",websiteschema);
