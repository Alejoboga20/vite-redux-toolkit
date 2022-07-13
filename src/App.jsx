import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, incrementByAmount } from './store/slices/counter';
import logo from './logo.svg';
import './App.css';

export const App = () => {
	const dispatch = useDispatch();
	const { counter } = useSelector((state) => state.counter);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Counter: {counter}</p>

				<button type='button' onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button type='button' onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button type='button' onClick={() => dispatch(incrementByAmount(10))}>
					Increment by 10
				</button>
			</header>
		</div>
	);
};
