import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemons } from './slices/pokemon/thunks';

export const PokemonApp = () => {
	const dispatch = useDispatch();
	const { isLoading, pokemons, page } = useSelector((state) => state.pokemon);

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	const onNextPage = () => dispatch(getPokemons(page));

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<h1>Pokemon App</h1>
			<hr />

			<ul>
				{pokemons.map((pokemon) => (
					<li key={pokemon.name}>{pokemon.name}</li>
				))}
			</ul>

			<button disabled={isLoading} onClick={onNextPage}>
				Next
			</button>
		</>
	);
};
