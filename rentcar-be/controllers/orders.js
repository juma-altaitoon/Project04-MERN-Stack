const Order = require("../models/Order");

exports.add_post = (req, res) => {
  let order = new order(req.body);
  order.save()
    .then((order) => {
      res.json({order})
      })
    .catch((err) => {
      res.json({err});
    });
};

exports.update_put = function (req, res) {
  order.findByIdAndUpdate(req.body.id, req.body, {new : true}) // new:true after edit API response
    .then((order) => {
        res.json({order})
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.index_get = (req, res) => {
  order.find()
    .then((orders) => {
      res.json({orders:orders});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.edit_get = function (req, res) {
    order.findById(req.query.id)//.populate('car', '').populate('user')
    .then((order) => {
      res.json({order});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.delete_delete = (req, res)=>{
    order.findOneAndDelete(req.query.id)
    .then((order)=>{
      res.json({order})  
    }
    ).catch((err)=>{
      res.json({err});
    })
}