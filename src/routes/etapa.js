const express=require("express");
const etapas = require("../models/etapas");
const router= express.Router();


   
    
   
    
    

router.post("/",  async (req,res)=>{
    
    let etapa = new etapas();
    etapa.nombre= req.body.nombre;
     etapa.anteproyecto= req.body.anteproyecto;
     etapa.ent_parcial1= req.body.ent_parcial1;
     etapa.ent_parcial2= req.body.ent_parcial2;
     etapa.ent_final= req.body.ent_final;
    
     etapa.fecha_creacion= new Date();
     etapa.fecha_update= new Date();
     
     
 
    etapa=  await etapa.save()
     .then((data)=>res.send("los datos han sido guardados"))
     .catch((error)=>res.json({ message: error}))
    //res.send(etapa)

});


router.get("/", async (req,res)=>{
 
    await etapas
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))
   

});


router.put("/:etapaid",  async (req,res)=>{
    
    let etapa = await etapas.findById(req.params.etapaid)
    etapa.nombre= req.body.nombre;
    etapa.anteproyecto= req.body.anteproyecto;
     etapa.ent_parcial1= req.body.ent_parcial1;
     etapa.ent_parcial2= req.body.ent_parcial2;
     etapa.ent_final= req.body.ent_final;
    
    
     
     
 
    etapa=  await etapa.save()
     .then((data)=>res.send("los datos han sido guardados"))
     .catch((error)=>res.json({ message: error}))
    //res.send(etapa)

});


module.exports= router;