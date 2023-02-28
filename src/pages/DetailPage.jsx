//library import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// component import
import Details from "../components/details/Details";
import Navigation from "../components/navigation/Navigation";

const DetailPage = () => {
	const params = useParams();
	const [beer, setBeer] = useState();

	console.log(params);

	useEffect(() => {
		fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerID}`)
			.then((response) => response.json())
			.then((data) => {
				setBeer(data);
			});
	}, []);

	console.log(beer);

	return (
		<div className="DetailsPage">
			<Details {...beer} />
			<Navigation />
		</div>
	);
};

export default DetailPage;
