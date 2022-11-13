const mongoose=require("mongoose");

const proyectoSchema= mongoose.Schema({

numero: {
type: Number,
required:true,
unique: true
},
titulo: {
    type: String,
    required: true
    },

 fecha_inicio: {
    type: String,
    required : true
        },

 fecha_entrega: {
    type: String,
    required:true
            },

valor: {
    type: Number,
    required:true,
    unique: true
                }, 

cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente"
    
                }, 

tipo_proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tipoproyecto"
    
                 },

universidad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "universidad"
    
                },
etapa_proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "etapa"
   
                },
fecha_creacion: {
    type: Date,
    required:true
               }, 
                        
fecha_update: {
    type: Date,
    required:true
                },


});

module.exports= mongoose.model('proyecto',proyectoSchema);