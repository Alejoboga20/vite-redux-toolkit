import { useDispatch, useSelector } from 'react-redux';

import { increment } from './store/slices/counter';
import logo from './logo.svg';
import './App.css';

export const App = () => {
	const dispatch = useDispatch();
	const { counter } = useSelector((state) => state.counter);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hello Vite + React!</p>
				<p>
					<button type='button' onClick={() => dispatch(increment())}>
						count is: {counter}
					</button>
				</p>
			</header>
		</div>
	);
};
