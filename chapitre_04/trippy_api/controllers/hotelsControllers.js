const hotels = require("../json/hotels.json");
const expressValidator = require("express-validator");

const getHotels = (req, res) => {
  res.json({
    status: "OK!",
    data: hotels,
  });
};

const getHotelById = (req, res) => {
  let id = req.params.id;
  const hotelById = hotels.find((hotel) => hotel.id.toString() === id);
  res.json({
    status: "OK!",
    data: hotelById,
  });
};

const addHotel = (req, res) => {
  const errors = expressValidator.validationResult(req);
  console.log("error", errors);
  if (errors.isEmpty() === false) {
    res.status(400).json({ messages: "it's fail" });
    return;
  } else {
    hotels.push(req.body);
    res.json({
      success: true,
      messages: "hotel will be add",
    });
  }
};

module.exports = {
  getHotels: getHotels,
  getHotelById: getHotelById,
  addHotel: addHotel,
};
