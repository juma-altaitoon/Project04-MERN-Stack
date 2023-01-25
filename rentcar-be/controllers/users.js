const User = require("../models/User");

exports.add_post = (req, res) => {
  let user = new User(req.body);
  user.save()
    .then((user) => {
      res.json({user})
      })
    .catch((err) => {
      res.json({err});
    });
};
exports.update_put = function (req, res) {
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
      User.findOneAndDelete(req.query.id)
      .then((user)=>{
        res.json({user})  
      }
      ).catch((err)=>{
        res.json({err});
      })
  }