const Car = require("../modal/Car");

module.exports = {
  allCar(req, res) {
    Car.find({})
      .then((res) => {
        res.status(200).json(res);
      })
      .then((err) => {
        res.status(400).json(err);
      });
  },
  create(req, res, next) {
    let {
      name,
      modal,
      balance,
      brand,
      edition,
      model_year,
      registration_year,
      condition,
      transmission,
      body_type,
      fuel_type,
      engine_capacity,
      kilometers_run,
      price,
      manufacturer,
      cost,
      days,
      accident,
      fullMonth,
    } = req.body;

    Car.save((err, res) => {
      if (res) {
        res.status(200).json(res);
      } else {
        res.status(400).json(err);
      }
    });
  },
};
