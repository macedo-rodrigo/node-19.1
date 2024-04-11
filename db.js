// Para acceder a la/s variable/s de entorno
require("dovenv").config();
const DB_CONNECTION = process.env.DB_URL;

// Para poder usar mongoose en este fichero
const mongoose = require("mongoose");