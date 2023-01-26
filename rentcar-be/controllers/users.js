const User = require("../models/User");
const jwt = require('jsonwebtoken');

// Require bcrypt
const bcrypt = require('bcrypt');

exports.add_post = (req, res) => {
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
    User.findByIdAndUpdate(req.body._id, req.body, {new : true}) // new:true after edit API response
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
      User.findOneAndDelete(req.query.id)
      .then((user)=>{
        res.json({user})  
      }
      ).catch((err)=>{
        res.json({err});
      })
  }

//JWT Api 
  exports.auth_signin_post = async (req, res) => {
    let { emailAddress, password } = req.body;
    console.log(emailAddress);
    try {
      let user = await User.findOne({ emailAddress });
      console.log(user);
      if (!user) {
        return res.json({ message: "User Not Found" });
      }
      // Compare Password
      const isMatch = await bcrypt.compareSync(password, user.password);
      console.log(password);
      console.log(user.password);
      if (!isMatch) {
        return res.json({ message: "Password doesnot matched" });
      }
      // Generate JWT
      const payload = {
        user: {
          id: user._id,
          name:user.firstName
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
      console.log(error);
      res.json({ message: "Your are not loggedIn !!!" }).status(400);
    }
  };
  

  // HTTP GET - Logout Route - To logout the user
exports.auth_logout_get = (req, res) => {

    // Invalidate the session
    req.logout(function(err){
        if(err){
            return next(err);
        }
        res.redirect("/auth/signin")
    });
}