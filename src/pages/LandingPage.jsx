// component import
import Category from "../components/category/Category";
// image import
import allBeer from "../img/allBeer.png";
import randomBeer from "../img/randomBeer.png";

const LandingPage = () => {
	return (
		<main className="LandingPage">
			<Category title="All Beers" img={allBeer} page="/listpage" />
			<Category title="Random Beers" img={randomBeer} page="/listpage/random" />
		</main>
	);
};

export default LandingPage;
