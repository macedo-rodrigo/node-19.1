// Para acceder a la/s variable/s de entorno
require("dotenv").config();
const DB_CONNECTION = process.env.DB_URL;

// Para poder usar mongoose en este fichero
const mongoose = require("mongoose");

// Config de la conexión
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMs: 500,
  dbName: "books-library",
};

const connect = async () => {
  const database = await mongoose.connect(DB_CONNECTION, config);
  const name = database.connection.name;
  const host = database.connection.host;
  console.log(`Conectado a la base de datos ${name} en el host ${host}`);
};

module.exports = { connect };
