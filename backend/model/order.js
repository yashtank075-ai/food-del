const mongoose = require('mongoose');
const orderschema = new mongoose.Schema({
     userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
     },
     items:[
        {
            product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
            required:true,
            },
            menu:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"menu",
                required:true,
            },
            quantity:{
                type:String,
                required:true,
                min:1,    
            },
            price:{
                type:Number,
                required:true,
            },
        },         
     ],
     amount:{
        type:Number,
        required:true
     },
     address:{
        type:Object,
        required:true
     },
     status:{
        type:String,
        enum:[
           "food processing",
           "order confirmed",
           "out of delivery",
           "delivered",
           "cancelled",
        ],
        default:"food processing",

     },
     payment:{
        type:Boolean,
        default:false,
     },
     date:{
        type: Date,
        default: Date.now
     },
},{
    timestamps: true
}) ; 
module.exports = mongoose.model("order",orderschema);

