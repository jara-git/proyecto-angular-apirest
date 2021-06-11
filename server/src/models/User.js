const { Schema, model } = require("mongoose");
//model es lo que se va a manipular, buscar, modifiacr,..
//schema es estructura de lo que se va a guardar en la bd

const sex_values = ['Mujer', 'Hombre',
    'No binario', 'No me identifico con ninguno de los descritos']

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: [3, 'Debe tener un minimo de 3 letras'],
            maxLength: [20, 'el nombre es demasiado largo']
        },
        surname: {
            type: String,
            required: true,
            minLength: [3, 'Debe tener un minimo de 3 letras'],
            maxLength: [30, 'es demasiado largo']
        },
        age: {
            type: Number,
            required: true,
            min: 1,
            max: [110, 'la edad no puede ser mayor que 110']
        },
        dni: {
            type: String,
            required: true,
            minLength: [9, 'Debe tener un minimo de 8 números y una letra']
        },
        bday: {
            type: Date,
            required: true,
        },
        favColor: {
            type: String,
            required: true,
            minLength: [3, 'Debe tener un minimo de 3 letras']
        },
        sex: {
            type: String,
            enum: {
                values: sex_values, message: "opción no válida"
            }

        }
    },
    {

        versionKey: false,
        //dato de cuando fue creado o actualizado
        timestamps: true,
    }
);

module.exports = model("User", userSchema);
