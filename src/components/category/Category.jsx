// style import
import "./Category.css";

// link import
import { Link } from "react-router-dom";

const Category = ({ img, title, page }) => {
	return (
		<section className="Category">
			<Link to={page}>
				<div className="title">
					<img src={img} alt={title} />
					<h2>{title}</h2>
				</div>
			</Link>
			<h4>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
				recusandae laborum molestias ut labore non?
			</h4>
		</section>
	);
};

export default Category;
