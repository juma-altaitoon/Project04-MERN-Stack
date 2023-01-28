const Car = require("../models/Car");

exports.add_post = (req, res) =>{
  Car(req.body).save()
    .then((car) => {
      res.json({car})
      })
    .catch((err) => {
      res.json({err});
    });
};

exports.update_put = function (req, res) {
  Car.findByIdAndUpdate(req.body.id, req.body, {new : true}) //new:true API response with update info
    .then((car) => {
        res.json({car})
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.index_get = (req, res) => {
  Car.find()
    .then((cars) => {
      res.json({cars:cars});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.edit_get = function (req, res) {
  Car.findById(req.query.id)
    .then((car) => {
      res.json({car});
    })
    .catch((err) => {
      res.json({err});
    });
};

exports.delete_delete = (req, res)=>{
    Car.findByIdAndDelete(req.query.id)
    .then((car)=>{
      res.json({car})  
    }
    ).catch((err)=>{
      res.json({err});
    })
}