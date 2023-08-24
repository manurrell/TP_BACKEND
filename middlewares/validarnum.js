const{Pokemon} = require("../models/pokemones")

const buscarpornumero = async (req, res, next)=>{
    try {
        const busqueda = await Pokemon.findOne({numero: req.params.numero});
        console.log(busqueda)
        if (busqueda !== null){
            next()
        } else{
            res.status(401).json({message: "Este pokemon no esta registrado en la pokedex: " + req.params.numero})
        }
    } catch (error) {
        res.status(401).json(error)
    }

}
module.exports = {buscarpornumero}