const express=require("express");
const Cliente = require("../models/clientes");
const router= express.Router();

router.post("/", async (req,res)=>{
   
    let cliente = new Cliente();
    cliente.nombre= req.body.nombre;
    cliente.email= req.body.email;
    cliente.fecha_creacion= new Date();
    cliente.fecha_update= new Date();
    
    

    cliente= await cliente.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))

});


router.get("/", async (req,res)=>{

    await Cliente
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))
  
});


router.put("/:clienteid", async (req,res)=>{
   
    let cliente = await Cliente.findById(req.params.clienteid)
    cliente.nombre= req.body.nombre;
    cliente.email= req.body.email;
   
    
    

    cliente= await cliente.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))

});


module.exports= router;