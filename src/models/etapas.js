const mongoose=require("mongoose");

 
const etapaSchema= mongoose.Schema({

nombre: {
type: String,
required:true
},
anteproyecto: {
    type: String,
    required:true
    },

 ent_parcial1: {
    type: String,
    required:true
        },

 ent_parcial2: {
    type: String,
    required:true
            },

ent_final: {
    type: String,
    required:true
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

module.exports= mongoose.model('etapa',etapaSchema);