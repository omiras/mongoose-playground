const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    // Completar
});

const Animal = mongoose.model('Animal', animalSchema);

const michi = new Animal({ especie: 'gato', nombre: 'Michi', edad: 2 });
console.log(michi);