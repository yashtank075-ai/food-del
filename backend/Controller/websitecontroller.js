const websiteco = require('../model/website');
exports.createweb = async (req,res)=>{
    try{
        const webdata = req.body;
        console.log(webdata);
        const website = await websiteco.create(webdata);
       return res.status(200).json({
            status:"success",
            message:"website ui/ux created",
            data:website
        })
        
    }catch{
        return res.status(400).json({
            status:"fail",
            error:error.message    
        })
    }
};
exports.getweb = async (req,res)=>{
    try{
       
        const getdata = await websiteco.find();
       return res.status(200).json({
            status:"success",
            message:"website ui/ux viwed",
            data:getdata
        })
        
    }catch{
        return res.status(400).json({
            status:"fail",
            error:error.message    
        })
    }
};
exports.updateweb = async (req,res)=>{
    try{
       
        const updatedata = await websiteco.findByIdAndUpdate(req.params.id,req.body,{new:true});
       return res.status(200).json({
            status:"success",
            message:"website ui/ux data updated",
            data:updatedata
        })
        
    }catch{
        return res.status(400).json({
            status:"fail",
            error:error.message    
        })
    }
};

exports.deleteweb = async (req,res)=>{
    try{
       
        const deletedata = await websiteco.findByIdAndDelete(req.params.id);
       return res.status(200).json({
            status:"success",
            message:"website ui/ux data deleted",
            data:deletedata
        })
        
    }catch{
        return res.status(400).json({
            status:"fail",
            error:error.message    
        })
    }
};
exports.updateweb = async (req,res)=>{
    try{
       
        const updatedata = await websiteco.findByIdAndUpdate(req.params.id,req.body,{new:true});
       return res.status(200).json({
            status:"success",
            message:"website ui/ux data updated",
            data:updatedata
        })
        
    }catch{
        return res.status(400).json({
            status:"fail",
            error:error.message    
        })
    }
};

