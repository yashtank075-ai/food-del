const menuco = require('../model/menu');
exports. createmenu = async (req,res)=>{
    try{
        const createdata = req.body;
        console.log(createdata);
        const menudata = await menuco.create(createdata);
      return  res.status(200).json({
            status:"success",
            message:"menu are created",
            data: menudata
        });
    
    }catch(error){
        return re.status(400).json({
            status:"fail",
            error:error.message
        })

    }
};

exports.getmenu =async (req,res)=>{
    try{
        const getdata= await menuco.find();
         return res.status(200).json({
            status:"success",
            message:"menu are viewd",
            data:getdata
        })

    }catch(error){
       return res.status(400).json({
            status:"fail",
            error:error.message
    })
 }

};
exports.updatemenu = async(req,res)=>{
    try{
        const updatedata = await menuco.findByIdAndUpdate(req.params.id,req.body,{new:true});
       return res.status(200).json({
            status:"success",
            message:"menu are update",
            data:updatedata
        });
    }catch(error){
        return  res.status(400).json({
            status:"fail", 
            error:error.message

         })
    }
};
exports.deletemenu = async(req,res)=>{
    try{
        const deletedata = await menuco.findByIdAnddelete(req.params.id);
       return res.status(200).json({
            status:"success",
            message:"menu are delete",
            data:deletedata
        });
    }catch(error){
        return  res.status(400).json({
            status:"fail", 
            error:error.message

         })
    }
};
