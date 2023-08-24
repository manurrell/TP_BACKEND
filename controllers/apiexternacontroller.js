const axios = require('axios');
const apiExterna = {
    async BuscarPokemon (req, res) {
        try {
                console.log(req.params.name)
                const PokemonName = req.params.name;
                if (PokemonName === undefined) {
                    res.status(400).json(
                        {
                            message: "no se ingreso ningun nombre"
                        }
                    )
                } else {
                    console.log("hola")
                    const ApiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);
                    if (ApiResponse.data.types.length === 0) {
                        res.status(404).json(
                            {
                                message: "no se encontro ningun pokemon con ese nombre"
                            }
                        )
                    } else {
                        console.log(ApiResponse.data)
                        const ApiData = ApiResponse.data;
                        const Types = ApiData.types.map(tipo => tipo.type.name);
                        const Pokemon = {
                            nombre: ApiData.name,
                            numero: ApiData.id,
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