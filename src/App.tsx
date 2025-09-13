import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { BubbleSort } from "./components/sorting/BubbleSort";
import { SelectionSort } from "./components/sorting/SelectionSort";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/algorithms/sorting/bubble-sort"
				element={<BubbleSort />}
			/>
			<Route
				path="/algorithms/sorting/selection-sort"
				element={<SelectionSort />}
			/>
			{/* 404 fallback */}
			<Route
				path="*"
				element={<h1>404 Page Not Found</h1>}
			/>
		</Routes>
	);
}

export default App;
