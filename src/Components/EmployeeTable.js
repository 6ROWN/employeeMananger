import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import EmployeeList from "./EmployeeList";

const EmployeeTable = () => {
	const { employees } = useContext(GlobalContext);
	return (
		<>
			{employees.length < 1 ? (
				<div
					style={{
						fontSize: "3rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "40vh",
						flexDirection: "column",
					}}
				>
					<div>No employee data available</div>

					<NavLink
						to="/add"
						style={{
							fontSize: "1rem",
							padding: "15px 30px",
							background: "#0c51a3",
							borderRadius: "6px",
							color: "#fff",
							margin: "15px 0",
						}}
					>
						Add new employee
					</NavLink>
				</div>
			) : (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Position</th>
							<th>Department</th>
							<th>Email</th>
							<th>Contact</th>
							<th>Experience</th>
							<th>Status</th>
							<th>Salary</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => (
							<EmployeeList
								key={employee.id}
								employee={employee}
							/>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default EmployeeTable;
