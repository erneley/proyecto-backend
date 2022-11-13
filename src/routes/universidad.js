const express=require("express");
const Universidad = require("../models/universidad");
const router= express.Router();

router.post("/", async (req,res)=>{
   
   let universidad = new Universidad();
    universidad.nombre= req.body.nombre;
    universidad.direccion= req.body.direccion;
    universidad.telefono= req.body.telefono;
    universidad.fecha_creacion= new Date();
    universidad.fecha_update= new Date();
    
    

    universidad= await universidad.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))
  //  res.send("listo la u")

});

router.get("/", async (req,res)=>{

    await Universidad
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))
  
});


router.put("/:universidadid", async (req,res)=>{
   
    let universidad = await universidad.findById(req.params.universidadid)
    universidad.nombre= req.body.nombre;
    universidad.direccion= req.body.direccion;
    universidad.telefono= req.body.telefono;

   
    
    

    universidad= await universidad.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))

});


module.exports= router;