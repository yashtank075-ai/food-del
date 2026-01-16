const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    image:{
       type:String,
       required:true
    },
     available:{
        type:Boolean,
         required:true
     },
     category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "menu",
        required:true
     },

},{
    timestamps:true
});
module.exports= mongoose.model("product",productschema);