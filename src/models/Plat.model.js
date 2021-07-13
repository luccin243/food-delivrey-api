const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const platSchema = Schema(
  {
    nom: { type: String, trim: true, required: true },
    prix: { type: Number, trim: true, required: true },
    delais: { type: Number, trim: true, required: true },
    promo: { type: Boolean, required: true, default: false },
    dispo: { type: Boolean, required: true, default: false },
    image: String,
    autreImages: [{ type: String }],
    commande: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' }],
    ets: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ets' },
        nom: { type: String, required: true },
      },
    ],
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
  },
  { timestamps: true }
);

module.exports = model('Plat', platSchema);
