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
        bloodType: "A+",
        birthDate: new Date("1980-03-21"),
        phone: "612345678",
        address: {
            street: "Fake Street 123",
            city: "Platja d'Aro",
            zip: "17250"
        },
        allergies: ["penicillin"]
    });

    await juana.save();
}

