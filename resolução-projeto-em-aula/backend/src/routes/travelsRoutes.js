const express = require("express");
const router = express.Router();

const travelsController = require("../controllers/travelsControllers");
const passengersController = require("../controllers/passengersControllers");

// VIAGENS
router.get("/travels/", travelsController.getAllTravels);
router.get("/passengers", passengersController.getAllPassengers);

router.get("/travels/:id", travelsController.getTravelById);

router.post("/travels/:id/passenger/create", passengersController.createPassenger);

router.put("/passenger/id/update", travelsController.updatePassenger);

router.delete("/travels/:id", travelsController.deleteTravel);


// PASSAGEIROS



router.delete("/passengers/:id", passengersController.deletePassenger);

router.put("/passengers/:id", passengersController.replacePassenger);

router.patch("/passenger/updateName/:id", passengersController.updateName);



//MOTORISTA

router.post("/travel/:id/driver/create", travelsController.createDriver);
router.put("/travel/:id", travelsController.replaceDriverInfos)
router.patch("/:id", travelsController.updateAnything)

module.exports = router;