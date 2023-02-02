const Order = require("../models/Order");
const Car = require("../models/Car");
const User = require("../models/User");

exports.add_post = (req, res) => {
  Order(req.body).save()
    .then((order) => {
      res.json({order})
      })
    .catch((err) => {
      res.json({err});
    });
};

exports.update_put = function (req, res) {
  Order.findByIdAndUpdate(req.body.id, req.body, {new : true})// new:true after edit API response
    .then((order) => {
        res.json({order})
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.index_get = (req, res) => {
  Order.find().populate('car').populate("user")
    .then((orders) => {
      res.json({orders:orders});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.edit_get = function (req, res) {
    Order.findById(req.query.id).populate('car').populate('user')
    .then((order) => {
      res.json({order});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.delete_delete = (req, res)=>{
    Order.findByIdAndDelete(req.query.id)
    .then((order)=>{
      res.json({order})  
    }
    ).catch((err)=>{
      res.json({err});
    })
}


//car extra
exports.car_index_get = (req, res) => {
  Car.find()
    .then((cars) => {
      res.json({cars:cars});
    })
    .catch((err) => {
      res.json({err});
    });
};

//user extra
exports.user_index_get = (req, res) => {
  User.find()
    .then((users) => {
      res.json({users:users});
    })
    .catch((err) => {
      res.json({err});
    });
};