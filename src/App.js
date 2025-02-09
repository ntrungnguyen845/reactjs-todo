import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/counter';
import logo from './logo.svg';
import { store } from './redux/store';
function App() {
	let students = [
		{ id: 1, name: 'Alice', age: 20 },
		{ id: 2, name: 'Bob', age: 22 },
		{ id: 3, name: 'Charlie', age: 21 },
		{ id: 4, name: 'David', age: 23 },
	];

	function removeStudentById(id) {
		students = students.filter((student) => student.id !== id);
	}
	console.log(students);
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hello World...
					</a>
					<Counter />
				</header>
			</div>
		</Provider>
	);
}

export default App;
