// style import
import "./Details.css";

//component import
import { Link } from "react-router-dom";

// backbutton-image import
import back from "../../img/Back.svg";

// library import
import { useNavigate } from "react-router-dom";

const Details = (props) => {
	const navigate = useNavigate();
	let creator = props.contributed_by
		? props.contributed_by.split("<")[0]
		: null;
	return (
		<section className="Details">
			<img className="img" src={props.image_url} alt="{props.name}" />

			<article>
				<h3>{props.name}</h3>
				<h5>{props.tagline}</h5>
				<div className="details">
					<p>
						First brewed: <span>{props.first_brewed}</span>
					</p>
					<p>
						Attenuation level: <span>{props.attenuation_level}</span>
					</p>
				</div>
				<p>{props.description}</p>
				<p>Created by {creator}</p>
				{/* <Link to="/listpage/">
					<img className="back" src={back} alt="go back" />
				</Link> */}

				<input
					type="image"
					className="back"
					src={back}
					alt="go back"
					onClick={() => navigate(-1)}
				/>
			</article>
		</section>
	);
};

export default Details;
