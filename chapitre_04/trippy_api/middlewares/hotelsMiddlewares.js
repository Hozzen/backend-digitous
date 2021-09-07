const { body } = require("express-validator");

/* - `name` de type `String`
- `address` de type `String`
- `city` de type `String`
- `country` de type `String`
- `stars` de type `Number` qui ira de 1 à 5
- `hasSpa` de type `Boolean`
- `hasPool` de type `Boolean`
- `priceCategory` de type `Number` qui ira de 1 à 3*/

const hotelCheck = body("name").isString();
body("address").isString();
body("city").isString();
body("country").isString();
body("stars").isInt({ min: 1, max: 5 });
body("hasSpa").isBoolean();
body("hasPool").isBoolean();
body("priceCategory").isInt({ min: 1, max: 3 });

module.exports = {
  hotelCheck: hotelCheck,
};
