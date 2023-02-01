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
    fuel_level_before: String,
    fuel_level_after: String,
    car_images_before: String,
    car_images_after: String,
    mileage_before: Number,
    mileage_after: Number,
    extra_cost: Number,
    comment: String


   
},{timestamps: true}) 

const Order = mongoose.model("Order", orderSchema , "Order");
module.exports = Order;