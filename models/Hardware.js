const { Schema, model } = require("mongoose");

const hardwareSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    modelo: {
        type: String,
        require: true,
        
        //unique: true
    },
    marca: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    año: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }

});

module.exports = model("Hardware", hardwareSchema);
