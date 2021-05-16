import React, { useState } from "react";

const Dogs = () => {
	const [animals, SetAnimal] = useState([]);
	const [newAnimal, SetNewAnimal] = useState("");

	const addAnimal = () => {
		if (newAnimal != "") {
			const news = animals.concat({
				name: newAnimal,
				id: animals.length + 1
			});
			SetAnimal(news);
		}
	};

	return (
		<div>
			<input
				type="text"
				value={newAnimal}
				onChange={e => SetNewAnimal(e.target.value)}
			/>
			<button onClick={addAnimal}>Add</button>

			<ol>
				{animals.map(animal => {
					return <li key={animal.id}>{animal.name}</li>;
				})}
			</ol>
		</div>
	);
};

export default Dogs;
