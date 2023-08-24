const {Schema, model} = require('mongoose');

const schema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true},
    numero: {
        type: Number,
        required: true},
    debilidades: {
        type: String,
        required: true},
})

const Pokemon = model('Pokemon', schema)
module.exports = {Pokemon}