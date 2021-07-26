const HttpError = require("../models/http-error");
const Bike = require("../models/bikes.js");

const getBikes = async (req, res, next) => {
  let bikes;

  try {
    bikes = await Bike.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching bikes failed. Please try again later",
      500
    );
    return next(error);
  }

  res.json({ bikes: bikes.map((bike) => bike.toObject({ getters: true })) });
};

exports.getBikes = getBikes;
