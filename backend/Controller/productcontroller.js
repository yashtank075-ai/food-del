const productco = require('../model/product');
exports.createproduct = async (req,res)=>{
    try{
        let proddata = req.body;
        console.log(proddata);
        const productdata = await productco.create(proddata);
        return res.status(200).json({
            status:"success",
            message:"product create successfully",
            data:productdata
        })
    }catch(error){
       return res.status(400).json({
        status:"fail",
        error:error.message
       })
    }
};
exports.viewproduct =async (req,res)=>{
    try{
        const viewdata = await productco.find().populate('category');
       return res.status(200).json({
            status:"success",
            message:"product are viwed",
            data:viewdata
        })

    }catch(error){
       return res.status(400).json({
            status:"fail",
            error:error.message
        })

    }
};
exports.updateproduct = async(req,res)=>{
    try{
        const updateproduct = await productco.findByIdAndUpdate(req.params.id,req.body,{new:true});
      return  res.status(200).json({
            status:"success",
            message:"product are updateed",
            data:updateproduct
        })

    }catch(error){
       return res.status(400).json({
            status:"fail",
            error:error.message
        })
    }
};

exports.deleteproduct = async (req,res)=>{
    try{
        const deleteproduct = await productco.findByIdAndDelete(req.params.id);
      return res.status(200).json({
            status:"success",
            message:"delete product successfully",
            data:deleteproduct
        })

    }catch(error){
     return  res.status(400).json({
        status:"fail",
        error:error.message
      })

    }
};
exports.productmenu = async (req,res)=>{
    try{
        const productmenu = await productco.find({_id:req.params.id});
        return  res.status(200).json({
            status:"success",
            message:"product specific from menu",
            data:productmenu
        })

    }catch(error){
        return res.status(400).json({
            status:"fail",
            error:error.message
        })
    }
};
