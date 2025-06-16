# Introducción a Mongoose

## Instalar dependencias

Ejecuta `npm install` para instalar todas las dependencias de este proyecto.
Luego ejecugta cada script con `node nombre-fichero.js`

## ex1

Fíjate en ex1-ejemplo.js. Ejecútalo y observa en los ejemplos.
Ahora crea una *instancia de la clase Animal* de tipo _rana_ , de nombre _Gustavo_ y que tiene 1 año de edad.
Muestra la rana por consola.

## ex2

Completa  el [Schema](https://mongoosejs.com/docs/guide.html#definition) que representa a un animal.
Un animal posee 3 caracteristicas:

- Especie, de tipo string
- Nombre, de tipo string
- Edad, de tipo number

No es necesario guardar el animal en ninguna base de datos, tan solo definir su _Schema_ correctamente usando _Mongoose_

## ex3

La Clínica Teknom necesita almacenar en una base de datos información sobre los pacientes.
Han decidido crear una base de datos de nombre _teknom_, y una colección de nombre _patients_, donde cada documento almacena uno de los pacientes. Estos documentos tienen las siguientes características:

- Nombre (obligatorio)
- Apellidos (obligatorio)
- Fecha nacimiento (obligatorio)
- Teléfono móvil. Es necesario validar que sea un móvil español. (obligatorio)
- Dirección postal. Consta de 3 subcampos: calle, ciudad y código postal
- Un campo para indicar si la ficha del paciente está activa o no lo está. Por defecto, cuando se da de alta en el sistema al paciente se considera que *si* tiene la ficha activa
- Un campo para guardar las alergías del paciente. Una estrctura de datos adecuada puede ser un array de strings

**Nota importante**: En la línea `await mongoose.connect('AQUI VA TU CONNECTION STRING/teknom');` asegurate de usar tu cadena de conexión a la base de datos de MongoDB Atlas

1. Si defines correctamente tu _Schema_ la paciente juana debería insertarse correctamente en tu base de datos de MongoDB Atlas.
2. Prueba de insertar algun otro paciente.

### ex3 : Iteración 2 - Pacientes incorrectos

Intenta ahora insertar estos paciente en tu base de datos.
Si has definido correctamente su _Schema_ deberías obtener un error al intentar insertarlos en la base de datos. ¿Sabrías decir porqué obtienes dicho error?

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





