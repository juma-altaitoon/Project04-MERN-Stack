const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    catagory: String,
    plate_id: String,
    documents: String,
    manufacture_year: Number,
    brand: String,
    insurance_company: String,
    insurance_id: String,
    insurance_date: Date,
    seats: Number,
    color: String,
    engine: String,
    fuel_type: String,
    car_size: String,
    transmission: Boolean,
    registration_date: Date,
    expiry_date: Date,
    car_images: String,
    rate: Number,
    milage_limit: Number,
    comment: String  
},{timestamps: true}) 

const Car = mongoose.model("Car", carSchema , "Car");
module.exports = Car;