import mongoose from 'mongoose';
const esquema = new mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      sticker: String
    }
);

export default mongoose.model('stickers', esquema);