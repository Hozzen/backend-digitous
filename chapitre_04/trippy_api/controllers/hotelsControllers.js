let hotels = require("../json/hotels.json");
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
  console.log(errors);

  if (errors.isEmpty() === false) {
    return res.status(400).json({
      message: "error",
      errors: errors.array(),
    });
  }

  hotels.push(req.body);
  res.json({
    success: true,
    messages: "hotel will be add",
    data: hotels,
  });
};

const changeHotelName = (req, res) => {
  let id = req.params.id;
  const newName = req.query.name;
  console.log(newName);
  const hotelById = hotels.findIndex((hotel) => hotel.id.toString() === id);
  hotels[hotelById].name = newName;

  res.json({
    status: "OK",
  });
};

const deleteHotel = (req, res) => {
  let id = req.params.id;
  let hotelToDelete = hotels.find((hotel) => hotel.id.toString() === id);
  console.log("hotels before : ", hotels);
  console.log(
    "hotels to delete",
    hotels.filter((hotel) => hotel != hotelToDelete)
  );
  hotels = hotels.filter((hotel) => hotel != hotelToDelete);
  console.log("hotels after : ", hotels);

  res.json({
    status: "Delete done",
    data: hotels,
  });
};

module.exports = {
  getHotels: getHotels,
  getHotelById: getHotelById,
  addHotel: addHotel,
  changeHotelName: changeHotelName,
  deleteHotel: deleteHotel,
};
