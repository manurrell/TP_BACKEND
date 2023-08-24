const axios = require('axios');

const apiExterna = {
    async BuscarPokemon (req, res) {
        try {
                const PokemonName = req.params.name;
                if (nombrePokemon === undefined) {
                    res.status(400).json(
                        {
                            message: "no se ingreso ningun nombre"
                        }
                    )
                } else {
                    const ApiResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/' + PokemonName);
                    if (ApiResponse.data.types.length === 0) {
                        res.status(404).json(
                            {
                                message: "no se encontro ningun pokemon con ese nombre"
                            }
                        )
                    } else {
                        const Types = ApiResponse.data.types.map(tipo => tipo.type.name);
                        const Pokemon = {
                            nombre: ApiResponse.data.name,
                            numero: ApiResponse.data.id,
                            tipos: Types,
                        }
                        res.status(200).json(Pokemon)
                        
                    }
                }
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

module.exports = apiExterna;