const{Pokemon} = require("../models/pokemones")

const repeticion = async (req, res, next)=>{
    try {
        const busqueda = await Pokemon.findOne({numero: req.body.numero});
        console.log(busqueda)
        if (busqueda !== null){
            res.status(401).json({message: "Este pokemon ya esta registrado en la pokedex: " + req.params.numero})
        } else{
            next()
        }
    } catch (error) {
        res.status(401).json(error)
    }

}
module.exports = {repeticion}