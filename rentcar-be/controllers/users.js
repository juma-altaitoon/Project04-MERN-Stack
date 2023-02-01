const User = require("../models/User");
const jwt = require('jsonwebtoken');

// Require bcrypt
const bcrypt = require('bcrypt');

exports.add_post = (req, res) => {
    //encrypt password
    hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password= hash;
    User(req.body).save()
    .then((user) => {
      res.json({user})
      })
    .catch((err) => {
      res.json({err});
    });
};

exports.update_put = function (req, res) {
    //encrypt password
    hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password= hash;
    User.findByIdAndUpdate(req.body.id, req.body, {new : true}) // new:true after edit API response
      .then((user) => {
          res.json({user})
      })
      .catch((err) => {
        res.json({err});
      });
  };
  
  exports.index_get = (req, res) => {
    User.find()
      .then((users) => {
        res.json({users:users});
      })
      .catch((err) => {
        res.json({err});
      });
  };
  
  exports.edit_get = function (req, res) {
      User.findById(req.query.id)
      .then((user) => {
        res.json({user});
      })
      .catch((err) => {
        res.json({err});
      });
  };
  
  exports.delete_delete = (req, res)=>{
    User.findByIdAndDelete(req.query.id)
      .then((user)=>{
        res.json({user})  
      }
      ).catch((err)=>{
        res.json({err});
      })
  }

//JWT Api 
  exports.login_post = async (req, res) => {
    let { email_address, password } = req.body;
    try {
      let user = await User.findOne({ email_address });
      if (!user) {
        return res.json({ message: "User Not Found" });
      }
      // Compare Password
      const isMatch = await bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res.json({ message: "Password does not match" });
      }
      // Generate JWT
      const payload = {
        user: {
          id: user._id,
          name:user.first_name
        },
      };
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token }).status(200);
        }
      );
    } catch (error) {
      res.json({ message: "Your are not loggedIn !!!" }).status(400);
    }
  };