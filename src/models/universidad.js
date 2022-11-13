const mongoose=require("mongoose");


const universidadSchema= mongoose.Schema({

nombre: {
type: String,
required:true
},


direccion: {
    type:String,
    required:true
                }, 
telefono: {
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

module.exports= mongoose.model('universidad',universidadSchema);