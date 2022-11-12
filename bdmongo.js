import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const db = mongoose.connect(process.env.MON_DBURI).then(() => {
    console.log(" la conexion fue realizada🤑 con exito a la BD: 🤑")
}).catch((error) => console.error(" Problemas al conectar a la base de datos de Mongdb 😩",error));

export default db;