import logo from './logo.svg';
import './App.css';

function App() {
	const animals = [
		{ id: 1, name: "Dog" },
		{ id: 2, name: "Bird" },
		{ id: 3, name: "Cat" },
		{ id: 4, name: "Mouse" },
		{ id: 5, name: "Horse" }
	];

	const renderAnimals = animals.map(animal => (
		<li key={animal.id}>{animal.name}</li>
	))

	return (
		<ul>{renderAnimals}</ul>
	);
}

export default App;
