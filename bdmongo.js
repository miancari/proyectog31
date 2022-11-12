import mongoose from "mongoose";

const uri = 'mongodb+srv://miancari:Millos07@cluster0.1mljg8b.mongodb.net/dbeventos?retryWrites=true&w=majority';
export const db = mongoose.connect(uri).then(() => {
    console.log(" la conexion fue realizada🚄 con exito a la BD: 🚄")
}).catch((error) => console.error(" Problemas al conectar a la base de datos de Mongdb 😩",error));

export default db;