const express =  require('express');
const app = express();
const cors = require('cors');
const user = require('./Routes/userrouter');
const product = require('./Routes/productrouter');
const menu = require('./Routes/menurouter');
const website = require('./Routes/websiterouter');
const order = require('./Routes/orderrouter');

app.use(cors())
app.use(express.json());
app.use("/user",user);
app.use("/product",product);
app.use("/menu",menu);
app.use("/website",website);
app.use("/order",order);

//mongodb coonect
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/register")
.then(()=>{
   console.log("mongodb connect successfully");
})
.catch(()=>{
   console.log("error",error);
   
})


const PORT = 5000
app.listen(PORT,()=>{
    console.log("Server Running...");
});
