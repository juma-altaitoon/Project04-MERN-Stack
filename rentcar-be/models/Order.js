const mongoose =require ('mongoose');

const orderSchema = mongoose.Schema({
    
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    car : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },

    status: String,
    pickup_location: String,
    pickup_date: Date,
    drop_location: String,
    drop_date: Date,
    rent_price: Number,
    fuel_level_before: Number,
    fuel_level_after: Number,
    car_images_before: String,
    car_images_after: String,
    milage_before: Number,
    milage_after: Number,
    extra_cost: Number,
    comment: String


   
},{timestamps: true}) 

const Order = mongoose.model("Order", orderSchema , "Order");
module.exports = Order;