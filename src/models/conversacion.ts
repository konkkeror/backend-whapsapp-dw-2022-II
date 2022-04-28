import mongoose from 'mongoose';
const esquema = new mongoose.Schema(
    {
        emisor: mongoose.Schema.Types.ObjectId,
        receptor: mongoose.Schema.Types.ObjectId,
        ultimoMensaje: String,
        fechaConversacion: String,
        mensajes: Array
    }
);

export default mongoose.model('conversaciones', esquema);