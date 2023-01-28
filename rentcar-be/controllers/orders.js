const Order = require("../models/Order");

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
  Order.findByIdAndUpdate(req.body._id, req.body, {new : true}) // new:true after edit API response
    .then((order) => {
        res.json({order})
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.index_get = (req, res) => {
  Order.find()
    .then((orders) => {
      res.json({orders:orders});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.edit_get = function (req, res) {
    Order.findById(req.query.id)//.populate('car', '').populate('user')
    .then((order) => {
      res.json({order});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.delete_delete = (req, res)=>{
    Order.findOneAndDelete(req.query.id)
    .then((order)=>{
      res.json({order})  
    }
    ).catch((err)=>{
      res.json({err});
    })
}