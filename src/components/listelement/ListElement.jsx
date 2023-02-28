// style import
import { Link } from "react-router-dom";
import "./ListElement.css";

const ListElement = ({ image_url, name, tagline, contributed_by, _id }) => {
	return (
		<section className="ListElement">
			<img src={image_url} alt={name} />
			<article>
				<h4>{name}</h4>
				<h5>{tagline}</h5>
				<p>Created by {contributed_by.replace(/<[^>]+>/g, "")}</p>
				<Link to={`/listpage/${_id}`}>Details</Link>
			</article>
		</section>
	);
};

export default ListElement;
