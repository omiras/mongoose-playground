const mongoose = require('mongoose');
const { type } = require('os');

const animalSchema = new mongoose.Schema({
    // Completar
    especie: {
        required: true,
        type: String,
    },
    nombre: {
        required: true,
        type: String
    },
    edad: {
        required: true,
        type: Number
    }
});

const Animal = mongoose.model('Animal', animalSchema);

const michi = new Animal({ especie: 'gato', nombre: 'Vertín', edad: 11 });
console.log(michi);