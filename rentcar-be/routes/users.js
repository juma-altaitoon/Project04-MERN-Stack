const express = require('express');
const router =  express.Router();


router.use(express.json());

//files upload
const multer = require('multer'); // to upload files
const { v4: uuidv4 } = require('uuid'); //generate file name based RFC - uuidv4();
const DIR = './files/';

//to upload files and generate uuid file name 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

//to upload files and generate uuid file name
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5},
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            console.log("file not matched")
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// var upload = multer({
//     //filter for upload types
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             console.log("file not matched")
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

//const isLoggedIn = require("../helper/isLoggedIn");

const usersController = require('../controllers/users');

router.post('/user/add', upload.single('documents'), usersController.add_post);
router.get('/user/index', usersController.index_get); //read list
router.get('/user/edit', usersController.edit_get); //read item to edit it
router.put('/user/update', upload.single('documents'), usersController.update_put); //test and will add it later to post and car, and car update
router.delete('/user/delete', usersController.delete_delete); 
router.post('/user/login', usersController.login_post);

module.exports = router;