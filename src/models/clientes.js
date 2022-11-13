const mongoose=require("mongoose");


const clienteSchema= mongoose.Schema({

nombre: {
type: String,
required:true
},


email: {
    type:String,
    required:true
                }, 

                    
fecha_creacion: {
    type: Date,
    required:true
               }, 
                        
fecha_update: {
    type:  Date,
    required:true
                },


});

module.exports= mongoose.model('cliente',clienteSchema);