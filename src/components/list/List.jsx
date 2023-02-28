// component import
import ListElement from "../listelement/ListElement";

// style import
import "./List.css";

// library import
import { useState, useEffect } from "react";

const List = () => {
	const [selection, setSelection] = useState();

	useEffect(() => {
		fetch("https://ih-beers-api2.herokuapp.com/beers")
			.then((response) => response.json())
			.then((data) => {
				setSelection(data);
			});
	}, []);
	console.log("selection", selection);

	return (
		<div className="List">
			{selection &&
				selection.map((beer) => {
					return <ListElement {...beer} key={beer._id} />;
				})}
		</div>
	);
};

export default List;
