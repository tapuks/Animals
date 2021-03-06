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
	const deleteAnimal = animalID => {
		const newArray = animals.filter(animal => animal.id != animalID);
		SetAnimal(newArray);
	};

	return (
		<div>
			<input
				type="text"
				value={newAnimal}
				onChange={e => SetNewAnimal(e.target.value)}
			/>
			<button onClick={() => addAnimal()}>Add</button>

			<ol>
				{animals.map(animal => {
					return (
						<li key={animal.id}>
							{animal.name}
							<button onClick={() => deleteAnimal(animal.id)}>
								Delete
							</button>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Dogs;
