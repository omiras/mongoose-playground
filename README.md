# Introducción a Mongoose

## Instalar dependencias

Ejecuta `npm install` para instalar todas las dependencias de este proyecto.
Luego ejecuta cada script con `node nombre-fichero.js`

## ex1

Fíjate en ex1-ejemplo.js. Ejecútalo y observa en los ejemplos.
Ahora crea una *instancia de la clase Animal* de tipo _rana_, de nombre _Gustavo_ y que tiene 1 año de edad.
Muestra la rana por consola.

<img src="https://oscarm.tinytake.com/media/1779242?filename=1750071578698_TinyTake16-06-2025-12-59-34_638856683781840953.png&sub_type=thumbnail_preview&type=attachment&width=794&height=103" title="Powered by TinyTake Screen Capture"/><br>

## ex2

Completa  el [Schema](https://mongoosejs.com/docs/guide.html#definition) que representa a un animal.
Un animal posee 3 características:

- Especie, de tipo string
- Nombre, de tipo string
- Edad, de tipo number

Todos los campos son requeridos.

No es necesario guardar el animal en ninguna base de datos, tan solo definir su _Schema_ correctamente usando _Mongoose_
Aquí tienes un [ejemplo completo](https://github.com/omiras/ejemplos-backend-ironhack/edit/main/mongoose/app-dungeon-dragons-solution.js) de creación de un Schema en Mongoose

<img src="https://oscarm.tinytake.com/media/177924f?filename=1750071794503_TinyTake16-06-2025-01-03-12_638856685938065377.png&sub_type=thumbnail_preview&type=attachment&width=627&height=169" title="Powered by TinyTake Screen Capture"/><br>

## ex3

La Clínica Teknom necesita almacenar en una base de datos información sobre los pacientes.
Han decidido crear una base de datos de nombre _teknom_, y una colección de nombre _patients_, donde cada documento almacena uno de los pacientes. Estos documentos tienen las siguientes características:

- Nombre (obligatorio)
- Apellidos (obligatorio)
- Fecha de nacimiento (obligatorio)
- Grupo sanguíneo. Solamente puede ser uno de estos: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-' . Es un campo opcional.
- Teléfono móvil. Es necesario validar que sea un móvil español. (obligatorio)
- Dirección postal. Consta de 3 subcampos: calle, ciudad y código postal. Es un campo opcional
- Un campo para indicar si la ficha del paciente está activa o no lo está. Por defecto, cuando se da de alta en el sistema al paciente se considera que *sí* tiene la ficha activa. Campo opcional.
- Un campo para guardar las alergias del paciente. Una estructura de datos adecuada puede ser un array de strings. Campo opcional.

**Nota importante**: En la línea `await mongoose.connect('AQUI VA TU CONNECTION STRING/teknom');` asegúrate de usar tu cadena de conexión a la base de datos de MongoDB Atlas

1. Si defines correctamente tu _Schema_ la paciente Juana debería insertarse correctamente en tu base de datos de MongoDB Atlas.
2. Prueba de insertar algún otro paciente.

<img src="https://oscarm.tinytake.com/media/177929e?filename=1750072511759_TinyTake16-06-2025-01-15-09_638856693110893655.png&sub_type=thumbnail_preview&type=attachment&width=797&height=63" title="Powered by TinyTake Screen Capture"/><br>

<img src="https://oscarm.tinytake.com/media/17792a5?filename=1750072588589_TinyTake16-06-2025-01-16-05_638856693871182928.png&sub_type=thumbnail_preview&type=attachment&width=800&height=501" title="Powered by TinyTake Screen Capture"/><br>

### ex3 : Iteración 2 - Pacientes incorrectos

Intenta ahora insertar estos pacientes en tu base de datos.
Si has definido correctamente su _Schema_ deberías obtener un error al intentar insertarlos en la base de datos. ¿Sabrías decir por qué obtienes dicho error?

```
  const john = new Patient({
        firstName: "John",
        birthDate: new Date("1980-03-21"),
        phone: "1234",
        address: {
            street: "Fake Street 123",
            city: "Platja d'Aro",
            zip: "17250"
        },
        allergies: ["penicillin"]
    });

    await john.save();
```

```
    const pepe = new Patient({
        firstName: "Pepe",
        lastName: "Pérez",
        birthDate: new Date("1980-03-21"),
        phone: "1234",
        address: {
            street: "Fake Street 123",
            city: "Platja d'Aro",
            zip: "17250"
        },
        allergies: ["penicillin"]
    });

    await pepe.save();
```