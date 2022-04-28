import mongoose from 'mongoose';
const esquema = new mongoose.Schema(
    {
        nombre: String,
        imagen: String,
        contactos: Array,
        conversaciones: Array
    }
);

export default mongoose.model('usuarios', esquema);