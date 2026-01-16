const orderco = require('../model/order');
exports.createorder = async (req,res)=>{
    try{
        let orderdata = req.body;
        console.log(orderdata);
        const order = await orderco.create(orderdata);
        res.status(200).json({
            status:"success",
            message:"order created succesfully",
            data: order
        })
    }catch(error){
          res.status(400).json({
            status:"fail",
            error:error.message      
    })
}
};
exports.getorder = async (req,res)=>{
    try{
      const getdata = await orderco.find({_id:req.params.userid}).populate("items.product") .populate("items.menu"); 
        res.status(200).json({
            status:"success",
            message:"order are viwedd",
            data:getdata
        });            
    }catch(error){
          res.status(400).json({
            status:"fail",
            error:error.message
            
        }); 
    }
};
exports.updateorder = async (req,res)=>{
    try{
      const updatedata = await orderco.findByIdAndUpdate(req.params.id,req.body,{new:true},{status:req.body.status})
        res.status(200).json({
            status:"success",
            message:"order are update",
            data:updatedata
        });            
    }catch(error){
          res.status(400).json({
            status:"fail",
            error:error.message
            
        }); 
    }
};

