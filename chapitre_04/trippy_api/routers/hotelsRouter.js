const express = require("express");
const hotelsControllers = require("../controllers/hotelsControllers.js");
const hotelsMiddlewares = require("../middlewares/hotelsMiddlewares.js");
const router = express.Router();

// ROUTE GET
router.get("/", hotelsControllers.getHotels);
router.get("/:id", hotelsControllers.getHotelById);

// ROUTER POST
router.post("/", hotelsMiddlewares.hotelCheck, hotelsControllers.addHotel);

module.exports = router;
