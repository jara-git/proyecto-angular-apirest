//conexión con la bd
const mongoose = require("mongoose");

//mongoose se conecta la mongodb y me crea la bd
mongoose
    .connect("mongodb://localhost/formulario-usuarios", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then((db) => console.log("la base de datos está conectada"))
    .catch((err) => console.error(err));

module.exports = mongoose;