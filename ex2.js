const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    // Completar
});

const Animal = mongoose.model('Animal', animalSchema);

const michi = new Animal({ especie: 'gato', nombre: 'Vertín', edad: 11 });
console.log(michi);