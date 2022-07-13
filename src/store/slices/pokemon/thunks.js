//https://pokeapi.co/api/v2/pokemon?limit=10&offset=0

import { pokeApi } from '../../../api/pokeApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemons());

		// const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
		// const data = await response.json();

		// const pokemons = data.results;
		const { data } = await pokeApi.get(`?limit=10&offset=${page * 10}`);
		const pokemons = data.results;

		dispatch(setPokemons({ pokemons, page: page + 1 }));
	};
};
