import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import Navbar from "./Components/Navbar";
import GlobalState from "./Components/Context/GlobalState";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";

function App() {
	return (
		<div className="App">
			<GlobalState>
				<Router>
					<Navbar />
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/add" element={<AddEmployee />} />
							<Route
								path="/edit/:id"
								element={<EditEmployee />}
							/>
						</Routes>
					</div>
				</Router>
			</GlobalState>
		</div>
	);
}

export default App;
