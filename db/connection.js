const mongoose= require ("mongoose")
require("dotenv").config();


const conexion= mongoose.connect(process.env.MONGODB_URI);
       
    

/*mongoose.connect(process.env.MONGODB_URI);
const objetobd=mongoose.connection
objetobd.on('connected',()=>{console.log("base de datos listo")})
objetobd.on('error',()=>{console.log("nada")})*/

module.exports  =   conexion;
    