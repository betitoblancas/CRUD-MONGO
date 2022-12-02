const { Router } = require("express")
const { updateHardware, deleteHardware, createHardware, readHardwares } = require("../controllers/hardwares");

const router = Router();

router.get("/", readHardwares)

router.post("/create", createHardware)

router.get("/delete/:id", deleteHardware)

router.post("/update", updateHardware)

module.exports = router;