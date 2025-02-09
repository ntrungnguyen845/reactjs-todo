import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../redux/store';

function Counter() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => dispatch(increase())}>Increase</button>
			<button onClick={() => dispatch(decrease())}>Decrease</button>
		</div>
	);
}

export default Counter;
