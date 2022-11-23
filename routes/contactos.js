const { Router } = require("express")
const { readContactos, createContacto, deleteContacto, updateContacto } = require("../controllers/contactos");

const router = Router();

router.get("/", readContactos)

router.post("/create", createContacto)

router.get("/delete/:id", deleteContacto)

router.post("/update", updateContacto)

module.exports = router;