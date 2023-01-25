// Dependencies
const express = require('express');
const mongoose = require('mongoose');

//.env init
require("dotenv").config();

// PORt configuration
const port = process.env.PORT ;

// PORT Configuration
// const port = 4002;

// Initailze Express
const app = express();

// Import Routes
// const recipeRoute = require('./routes/recipes');
// const ingredientRoute = require('./routes/ingredients');
// const authRoute = require('./routes/auth');

// Mount Routes
// app.use('/', recipeRoute);
// app.use('/', ingredientRoute);
// app.use('/', authRoute);

mongoose.set('strictQuery', false); // To remove deprecation warning

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected Successfully")
    }
)

// Listen to specific port for incomming requests
app.listen(port, () => {
    console.log(`RentCar BE App is running on ${port}`);
})