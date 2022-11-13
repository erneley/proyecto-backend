const express= require("express");
const mongoose= require ("mongoose");
require("dotenv").config();
const cors =require('cors');

const app=express();


// define el puerto
const port=process.env.PORT || 5000;
app.use(cors());

//conecta la base de datos
mongoose.connect(process.env.MONGODB_URI);
const objetobd=mongoose.connection
objetobd.on('connected',()=>{console.log("base de datos listo")})
objetobd.on('error',()=>{console.log("nada")})



//middleware
app.use(express.json());

// endpoints
app.use("/tipoproyecto",require("./src/routes/tipoProyecto"));
app.use("/clientes",require("./src/routes/clientes"));
app.use("/etapa",require("./src/routes/etapa"));
app.use("/proyecto",require("./src/routes/proyecto"));
app.use("/universidad",require("./src/routes/universidad"));

// ruta principal
app.get("/",(req,res)=>{
 res.send("esta funcionando la ruta");

});



// inicia el puerto
app.listen(port,() => console.log('servidor up',port));


