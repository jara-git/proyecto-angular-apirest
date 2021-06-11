const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express()

// Settings enviroment variables
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
//ver peticiones que llegan del servidor y mostrar por consola
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/api/users", require('./routes/users.routes'))

module.exports = app;