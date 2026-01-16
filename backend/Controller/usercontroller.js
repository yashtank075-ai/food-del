const bcrypt = require('bcrypt');
const User = require('../model/user');
const validator = require('validator');



exports.createuser = async (req, res) => {
    try {
        const {email,password,...rest} = req.body;
       
         if(!validator.isEmail(email)){
            return res.status(400).json({
                status:"fail",
                message:"invalid email formate"
            })
        }
         if(!validator.isStrongPassword(password,{
            minLength: 8,
            minUppercase: 1,
            minLowercase:1,
            minNumbers :1,
            minSymbols : 1,

        }))
        {
            return res.status(400).json({
                status:"fail",
                message:"password must 8+ character uppercase,lowercase,nuimber,symbol"

            
            });
        }
        
       
        const hashedPassword  = await bcrypt.hash(password,10);
        const users = await User.create({...rest,email,password:hashedPassword});

      return res.status(201).json({
            status: "success",
            message: "User created successfully",
            data:users
        });

    } catch (error) {
        console.log(error);
       return res.status(400).json({
            status: "fail",
            error: error.message
        });
    }
};
exports.viewuser = async (req,res) =>{
    try{
       const viewdata = await User.find()
     return res.status(200).json({
        status:"success",
        message:"data fetch successfully",
        data: viewdata
       })
    }catch(error){
        return res.status(400).json({
            status:"fail",
            error:error.message
        })

    }
};
exports.updatedata = async (req,res)=>{
    try{
       const updatedata = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
       return res.status(200).json({
        status:"success",
        message:"data update successfully",
        data: updatedata
       })
    }catch(error){
        return res.status(400).json({
            status:"success",
            error:error.message
        })

    }
};
exports.deletedata = async (req,res)=>{
    try{
        const deletedata = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status:"success",
            message:"delete data successfully",
            data:deletedata
        })

    }catch(error){
        return res.status(400).json({
            status:"fail",
            error:error.message
        })

    }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check empty
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Email and password are required"
      });
    }

    // 2. Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email format"
      });
    }

    // 3. Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password"
      });
    }

    // 4. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password"
      });
    }

    // 5. Remove password before sending
    const { password: pwd, ...userData } = user._doc;

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data: userData
    });

  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error: error.message
    });
  }
};
