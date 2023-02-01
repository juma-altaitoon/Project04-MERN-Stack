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


// url encoding to acccept files in the url multipart encoded
app.use(express.urlencoded({ extended: true }));

//Testing file upload backend
//generate longnames
//const { v4: uuidv4 } = require('uuid');
// multer

// function uploadFiles(req, res) {
//      //console.log(req.uploadFiles);
//      console.log(req.files);
     





     //   for (const file of files) {
  //     console.log(file)
  //     const url = await uploadFile(file);
  //     console.log(url)
  //     urls.push(url);
  //   }
     

    
     // console.log(req.file);
    // console.log(req.filename);
    // Step 1 - generate good file name
    //  const file = req.file;
    // const filename = file.name;
    // const indexLastDot = filename.lastIndexOf('.');
    // const after = str.slice(indexLastDot + 1);
    // const newpath = __dirname + "/files/" + uuidv4() + "." + after;
    // console.log(newpath)
    // Step 2 - do upload process
    // file.mv(`${newpath}${filename}`, (err) => {
    //     if (err) {
    //         res.status(500).send({ message: "File upload failed", code: 200 });
    //     }
    //     res.status(200).send({ message: "File Uploaded", code: 200 });
    // });

  // res.json({ message: "Successfully uploaded files" });
// }
const multer = require("multer");
//const upload = multer({ dest: "files/",
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


app.post("/uploads", upload.array("files", 12), uploadFiles);
function uploadFiles(req, res) {
   // var file = req.files;
   // console.log(req.files);
    res.end()
}

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