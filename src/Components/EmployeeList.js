import React, { useContext } from "react";
import GlobalContext from "./Context/GlobalContext";

import { Link } from "react-router-dom";

const EmployeeList = ({ employee }) => {
	const { removeEmployee } = useContext(GlobalContext);

	return (
		<tr>
			<td>
				{employee.firstname} {employee.lastname}
			</td>
			<td>{employee.position}</td>
			<td>{employee.department}</td>
			<td>{employee.email}</td>
			<td>{employee.contact}</td>
			<td>{employee.experience}</td>
			<td>{employee.status}</td>
			<td>{employee.salary}</td>
			<td>
				<span>
					<Link to={`/edit/${employee.id}`}>
						<i
							className="bx bxs-edit-alt"
							style={{ color: "#ffdf1b" }}
							// onClick={handleClick}
						></i>
					</Link>

					<i
						className="bx bxs-trash"
						style={{ color: "#ff0000" }}
						onClick={() => removeEmployee(employee.id)}
					></i>
				</span>
			</td>
		</tr>
	);
};

export default EmployeeList;
