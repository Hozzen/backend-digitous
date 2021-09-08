const { body } = require("express-validator");

/* - `name` de type `String`
- `address` de type `String`
- `city` de type `String`
- `country` de type `String`
- `stars` de type `Number` qui ira de 1 à 5
- `hasSpa` de type `Boolean`
- `hasPool` de type `Boolean`
- `priceCategory` de type `Number` qui ira de 1 à 3*/

const hotelCheck = () => [
  body("name").notEmpty().isString(),
  body("address").notEmpty().isString(),
  body("city").notEmpty().isString(),
  body("country").notEmpty().isString(),
  body("stars").notEmpty().isInt({ min: 1, max: 5 }).not().isString(),
  body("hasSpa").notEmpty().isBoolean(),
  body("hasPool").notEmpty().isBoolean(),
  body("priceCategory").notEmpty().isInt({ min: 1, max: 3 }).not().isString(),
];

const newNameHotelCheck = () => [body("name").notEmpty().isString()];

module.exports = {
  hotelCheck: hotelCheck,
  newNameHotelCheck: newNameHotelCheck,
};
