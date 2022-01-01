import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";
import GlobalContext from "./Context/GlobalContext";

const Home = () => {
	const { filterEmployee } = useContext(GlobalContext);

	return (
		<>
			<div className="home-heading">
				<div className="search-box">
					<i className="bx bx-search search-icon"></i>
					<input
						type="text"
						placeholder="Search"
						className="input"
						onChange={(e) => filterEmployee(e.target.value)}
					/>
				</div>

				<button className="add-btn">
					<Link to="/add">
						<i className="bx bx-plus"></i> Add Employee
					</Link>
				</button>
			</div>
			<EmployeeTable />
		</>
	);
};

export default Home;
