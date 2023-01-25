const car = require("../models/car");

exports.add_post = (req, res) => {
  let car = new car(req.body);
  car.save()
    .then((car) => {
      res.json({car})
      })
    .catch((err) => {
      res.json({err});
    });
};

exports.update_put = function (req, res) {
  car.findByIdAndUpdate(req.body.id, req.body, {new : true}) // new:true after edit API response
    .then((car) => {
        res.json({car})
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.index_get = (req, res) => {
  car.find()
    .then((cars) => {
      res.json({cars:cars});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.edit_get = function (req, res) {
    car.findById(req.query.id)
    .then((car) => {
      res.json({car});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.delete_delete = (req, res)=>{
    car.findOneAndDelete(req.query.id)
    .then((car)=>{
      res.json({car})  
    }
    ).catch((err)=>{
      res.json({err});
    })
}