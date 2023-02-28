// library import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// style import
import "./App.css";

// component import
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage";

function App() {
	return (
		<div className="LandingPage">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />}></Route>
					<Route path="/listpage" element={<ListPage />}></Route>
					<Route path="/listpage/:beerID" element={<DetailPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
