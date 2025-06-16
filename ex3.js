const { connect } = require('http2');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('AQUI VA TU CONNECTION STRING/teknom');

    const patientSchema = new mongoose.Schema({
        // Completar
    });

    const Patient = mongoose.model('Patient', patientSchema);

    const juana = new Patient({
        firstName: "Juana",
        lastName: "Pérez",
        birthDate: new Date("1980-03-21"),
        bloodType: "A+",
        phone: "612345678",
        address: {
            street: "Fake Street 123",
            city: "Platja d'Aro",
            zip: "17250"
        },
        allergies: ["penicillin"]
    });

    await juana.save();

    console.log("Paciente insertado en la base de datos correctamente");
}

