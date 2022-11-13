const express=require("express");
const tipop = require("../models/tipoproyecto");
const router= express.Router();

router.post("/", async(req,res)=>{
    let tipopa = new tipop();
   tipopa.nombre= req.body.nombre;
    tipopa.ensayo= req.body.ensayo;
    tipopa.articulo= req.body.articulo;
    tipopa.monografia= req.body.monografia;
    tipopa.trabajo_final_pre= req.body.trabajo_final_pre;
    tipopa.trabajo_final_esp= req.body.trabajo_final_esp;
    

    tipopa.fecha_creacion= new Date();
    tipopa.fecha_update= new Date();
    
    

   tipopa= await tipopa.save()
    .then((data)=>res.send("los datos han sido guardados"))
    .catch((error)=>res.json({ message: error}))
   

});


router.get("/", async (req,res)=>{
   
    await tipop
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))
   

});



router.put("/:tpid", async (req,res)=>{
    let tipopa = await tipop.findById(req.params.tpid)
   tipopa.nombre= req.body.nombre;
    tipopa.ensayo= req.body.ensayo;
    tipopa.articulo= req.body.articulo;
    tipopa.monografia= req.body.monografia;
    tipopa.trabajo_final_pre= req.body.trabajo_final_pre;
    tipopa.trabajo_final_esp= req.body.trabajo_final_esp;
   
    

   tipopa= await tipopa.save()
    .then((data)=>res.send("los datos han sido actualizados"))
    .catch((error)=>res.json({ message: error}))
    //res.send(req.params.tpid)
   

});



module.exports= router;
