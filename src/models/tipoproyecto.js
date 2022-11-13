const mongoose=require("mongoose");


const tipopSchema= mongoose.Schema({

nombre: {
type: String,
required:true
},
ensayo: {
    type: String,
    required:true
    },

 articulo: {
    type:String,
    required:true
        },

 monografia: {
    type:String,
    required:true
            },

trabajo_final_pre: {
    type:String,
    required:true
                }, 
trabajo_final_esp: {
    type:String,
    required:true
                    },
                    
fecha_creacion: {
    type:  Date,
    required:true
               }, 
                        
fecha_update: {
    type:  Date,
    required:true
                },


});

module.exports= mongoose.model('tipoproyecto',tipopSchema);