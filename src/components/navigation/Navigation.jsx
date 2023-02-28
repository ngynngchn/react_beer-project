// style import
import "./Navigation.css";
// image import
import logo from "../../img/Logo.svg";

// link import
import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<nav>
			<Link to="/">
				<img src={logo} alt="Home" />
			</Link>
		</nav>
	);
};

export default Navigation;
