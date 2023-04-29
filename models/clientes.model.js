const { default: mongoose } = require("mongoose");

const clientesShema = new mongoose.Schema({
    credito: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    cartera: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    t_particular: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10,
        trim: true
    },
    t_celular: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10,
        trim: true
    },
    t_oficina: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10,
        trim: true
    },
    n_referencia1: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    t_referencia1: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10,
        trim: true
    },
    n_referencia2: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    t_referencia2: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10,
        trim: true
    },
    cp: {
        type: Number,
        required: true,
        minLength: 6,
        maxLength: 6,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
        trim: true
    },
    colonia: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    estatus: [{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    }],
    saldo: {
        type: Number,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    },
    dias_mora: {
        type: Number,
        required: true,
        minLength: 4,
        maxLength: 6,
        trim: true
    },
    zona: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50,
        trim: true
    },
    plaza: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50,
        trim: true
    },
    distrito: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50,
        trim: true
    },
    comentario: [{
        type: String,
        minLength: 10,
        maxLength: 200,
        trim: true
    }],
    asignacion: {
        type: String,
        minLength: 10,
        maxLength: 50,
        trim: true
    },
    
})