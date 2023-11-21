const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    qty:  { type: Number, required: true },
    admin:{ type: String, required: true },
    user:{ type: String, required: true }
});

const cart = new mongoose.model("cart", cartSchema);

module.exports = cart;