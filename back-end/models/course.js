const mongoose = require ('mongoose')

const Schema = mongoose.Schema

let CourseSchema = Schema ({
    nombre : {type:String, require:true},
    creditos : {type:Number, require:true},
    semesterId : {type:String, require:true},
    notas : [
        {
            nota : {type:String, require:true},
            porcentaje : {type:Number, require:true},
            calificacion : {type:Number, require:true}
        }
    ]
})

module.exports = mongoose.model('Course', CourseSchema)
