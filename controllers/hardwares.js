const Hardware = require("../models/Hardware")
const readHardwares = async (_, res) => {
    try {
        const hardwares = await Hardware.find({})

        if (hardwares.length === 0) {
            return res.render("index", {ok: false})
        }
        return res.render("index", {ok: true, hardwares: hardwares})
    } catch (error) {
        
    }
}

const createHardware = async(req, res) =>{
    console.log(req.body);
    try {
        const hardware_nuevo = new Hardware(req.body);

        await hardware_nuevo.save();

        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json ({ok: false, msg: "Error en el servidor, contacta con el admin"})
    }
}

const deleteHardware = async (req, res) => {
    const id = req.params.id
    try {
        await Hardware.findByIdAndDelete(id)

        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json ({ok: false, msg: "Error en el servidor, contacta con el admin"})
    }
}

const updateHardware = async (req, res) => {
   const id = req.body.edit_id
   try {
    await Hardware.findByIdAndUpdate(id, req.body)
    return res.redirect("/")
   } catch (error) {
    return res.json ({ok: false, msg: "Error en el servidor, contacta con el admin"})

   }
}

module.exports = {
    readHardwares,
    createHardware,
    deleteHardware,
    updateHardware
}