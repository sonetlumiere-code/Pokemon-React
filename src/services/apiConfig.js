import axios from 'axios';

const url = 'https://pokeapi.co/api/v2';

export const apiBuilder = {

    getPokemon: async (nameOrId) => {
        try {
            const res = await axios.get(`${url}/pokemon/${nameOrId}`);
            return res;
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    getPokemons: async (offset, limit) => {
        try {
            const res = await axios.get(`${url}/pokemon?offset=${offset}&limit=${limit}`);
            const basicData = res.data.results;
            const pokemons = await Promise.all(basicData.map(poke => {
                return axios.get(poke.url)
            }));
            return pokemons.map(poke => poke.data);
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}