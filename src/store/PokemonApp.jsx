import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPokemons } from './slices/pokemon/thunks';

export const PokemonApp = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	return (
		<>
			<h1>Pokemon App</h1>
			<hr />
		</>
	);
};
