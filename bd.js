import mongoose from "mongoose";

export const MONGODB_URI = 'mongodb+srv://miancari:Millos07@cluster0.1mljg8b.mongodb.net/?retryWrites=true&w=majority'
export const db = await mongoose.connect(MONGODB_URI);
console.log("Connected to ", db.connection.name);
