import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AlgoCard from "./AlgoCard";

export function Home() {
	return (
		<div className="px-28">
			<Navbar />
			<div className="hero pt-20">
				<p className="text-8xl text-center font-bold">
					Visualize algorithms like never before
				</p>
			</div>

			<div className="flex gap-4 pt-16">
				<Link
					to="/algorithms/sorting/bubble-sort"
					className="text-blue-600"
				>
					<AlgoCard
						title={"Bubble Sort"}
						imageUrl={"/bubble-sort.png"}
						description={"Bubble Sort Algorithm"}
					/>
				</Link>

				<Link
					to="/algorithms/sorting/selection-sort"
					className="text-blue-600"
				>
					<AlgoCard
						title={"Selection Sort"}
						imageUrl={"/selection-sort.png"}
						description={"Selection Sort Algorithm"}
					/>
				</Link>
			</div>
		</div>
	);
}
