const{Pokemon} = require("../models/pokemones")


const apiController = {
    async info (req, res) {
        const list = await Pokemon.find();
        res.status(200).json(list)
    },
    async crear (req, res) {
        try {
            const newPokemon = new Pokemon(req.body);
            await newPokemon.save();
            res.status(201).json(newPokemon)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async buscarpornumero (req, res) {
        try {
            const busqueda = await Pokemon.findOne({numero: req.params.numero});
            res.status(200).json(busqueda)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async editar (req, res) {
        try {
            await Pokemon.findOneAndUpdate({numero: req.params.numero}, req.body);
            const busqueda = await Pokemon.findOne({numero: req.params.numero});
            res.json(busqueda)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async eliminar (req, res) {
        await Pokemon.findOneAndDelete({numero: req.params.numero});
        res.status(204).json(
            {
                message: "la info del pokemon " + req.params.numero + " fue eliminada con exito"
            }
        )
    }
}

module.exports = apiController