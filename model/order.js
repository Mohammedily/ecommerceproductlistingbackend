const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    address: [{
    door_no:{
        type: String,
        required: true
    },
    street_name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },   
    pincode:{
        type: Number,
        required: true
    }}],
    product:[{
        name: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        img:{
            type: String,
            required: true
        },
        qty:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        admin:{
            type: String,
            required: true 
        },
        user:{
            type: String,
            required: true 
        }
    }],
    totalAmount:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    status:{
      type: String,
      required: true
    },
    user:{
        type: String,
        required: true
    }
}, {timestamps: true});


const order = new mongoose.model("order", orderSchema);

module.exports = order;