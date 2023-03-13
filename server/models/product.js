const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Please Enter Product ID"],
    },

    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
    },
    featured: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,

    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"],
    },
    image: {
        type: String,
        default: "no-photo.jpg",
    },
    color: {
        type: String,

    },
    category: {
        type: String,
    }








});

module.exports = mongoose.model("Product", productSchema);
