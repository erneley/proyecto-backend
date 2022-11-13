const express=require("express");
const proyectos = require("../models/proyecto");
const router= express.Router();


                    

router.post("/", async (req,res)=>{


    const validarproyecto= await proyecto.findOne({ numero: req.body.numero});
    if (validarproyecto){
        return res.send("ya existe un proyecto con ese numero")
    }
    

    
    let proyecto = new proyectos();
   proyecto.numero= req.body.numero;
    proyecto.titulo= req.body.titulo;
    proyecto.fecha_inicio= req.body.fecha_inicio;
    proyecto.fecha_entrega= req.body.fecha_entrega;
    proyecto.valor= req.body.valor;
    proyecto.cliente= req.body.cliente._id;

    proyecto.tipo_proyecto= req.body.tipo_proyecto._id;
    proyecto.universidad= req.body.universidad._id;
    proyecto.etapa_proyecto= req.body.etapa_proyecto._id;
    

    proyecto.fecha_creacion= new Date();
    proyecto.fecha_update= new Date();
    
    

proyecto= await proyecto.save()
    .then((data)=>res.send("los datos han sido guardados"))
    .catch((error)=>res.json({ message: error}))
   


});




router.get("/", async (req,res)=>{
     
    await proyectos
    .find().populate([
{
    path: "cliente"
},
{
    path: "tipo_proyecto"
},
{
    path: "universidad"
},
{
    path: "etapa_proyecto"
}

    ])
    .then((data)=>res.json(data))
    .catch((error)=>res.json({ message: error}))
   

});


router.put("/:proyectoid", async (req,res)=>{
    let proyecto = await proyectos.findById(req.params.proyectoid)
   
    proyecto.titulo= req.body.titulo;
    proyecto.fecha_inicio= req.body.fecha_inicio;
    proyecto.fecha_entrega= req.body.fecha_entrega;
    proyecto.valor= req.body.valor;
    proyecto.cliente= req.body.cliente;

    proyecto.tipo_proyecto= req.body.tipo_proyecto;
    proyecto.universidad= req.body.universidad;
    proyecto.etapa_proyecto= req.body.etapa_proyecto;
    
    
    

proyecto= await proyecto.save()
    .then((data)=>res.send("los datos han sido guardados"))
    .catch((error)=>res.json({ message: error}))
   
   

});


module.exports= router;