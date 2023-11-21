const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    qty:  { type: Number, required: true },
    admin:{ type: String, required: true }
});

const product = new mongoose.model("product", productSchema);

module.exports = product;


