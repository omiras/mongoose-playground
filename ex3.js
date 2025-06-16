const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/teknom');

    const patientSchema = new mongoose.Schema({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        birthDate: { type: Date, required: true },
        bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
        phone: { type: String, required: true, match: /^[679]\d{8}$/ },
        address: {
            street: String,
            city: String,
            zip: String
        },
        active: { type: Boolean, default: true },
        allergies: [String],

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

    console.log("El paciente ha sido insertado en la base de datos correctamente.");
}

