const Contacto = require("../models/Contacto")
const readContactos = async (_, res) => {
    try {
        const contactos = await Contacto.find({})

        if (contactos.length === 0) {
            return res.render("index", {ok: false})
        }
        return res.render("index", {ok: true, contactos: contactos})
    } catch (error) {
        
    }
}

const createContacto = async(req, res) =>{
    console.log(req.body);
    try {
        const contacto_nuevo = new Contacto(req.body);

        await contacto_nuevo.save();

        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json ({ok: false, msg: "Error en el servidor, contacta con el admin"})
    }
}

const deleteContacto = async (req, res) => {
    const id = req.params.id
    try {
        await Contacto.findByIdAndDelete(id)

        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json ({ok: false, msg: "Error en el servidor, contacta con el admin"})
    }
}

const updateContacto = async (req, res) => {
   const id = req.body.edit_id
   try {
    await Contacto.findByIdAndUpdate(id, req.body)
    return res.redirect("/")
   } catch (error) {
    return res.json ({ok: false, msg: "Error en el servidor, contacta con el admin"})

   }
}

module.exports = {
    readContactos,
    createContacto,
    deleteContacto,
    updateContacto
}