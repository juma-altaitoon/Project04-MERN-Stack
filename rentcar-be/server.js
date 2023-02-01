// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const dotenv = require("dotenv");


//.env init
require("dotenv").config();

// PORt configuration
const port = process.env.PORT ;

// PORT Configuration
// const port = 4002;

// Initailze Express
const app = express();

//loosen secuirty for cors
app.use(cors());

//public access to upload files and photo
app.use('/files', express.static('files'));

// multer configuration
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.originalname.substring(file.originalname.lastIndexOf('.') + 1)
    )
    }
  })
const upload = multer({ storage: storage });
//Upload route and type for multi and function
app.post("/uploads", upload.array("files", 12), uploadFiles);
function uploadFiles(req, res) {
   // var file = req.files;
   // console.log(req.files);
    res.end()
}

//list files
var serveIndex = require('serve-index');
app.use('/files', serveIndex(__dirname + '/files'));

// Import Routes
// const uploadRoute = require('./routes/uploads');
const userRoute = require('./routes/users');
const carRoute = require('./routes/cars');
const orderRoute = require('./routes/orders');

// Mount Routes
// app.use('/', uploadRoute);
app.use('/', userRoute);
app.use('/', carRoute);
app.use('/', orderRoute);

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