import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import { useNavigate } from "react-router";

const EditEmployee = () => {
	const { employees, editEmployee } = useContext(GlobalContext);

	const navigate = useNavigate();

	const [selectedEmployee, setSelectedEmployee] = useState({
		id: null,
		firstname: "",
		lastname: "",
		position: "",
		department: "",
		email: "",
		contact: "",
		experience: "",
		status: "",
		salary: "",
	});

	// const currentId = props.match.params.id;

	const { id } = useParams();

	useEffect(() => {
		const employeeId = id;
		const selectedEmployee = employees.find(
			(employee) => employee.id === Number(employeeId)
		);

		setSelectedEmployee(selectedEmployee);
	}, [id, employees]);

	const handleSubmit = (e) => {
		e.preventDefault();
		editEmployee(selectedEmployee);
		navigate("/");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSelectedEmployee({
			...selectedEmployee,
			[name]: value,
		});
	};

	return (
		<>
			<div className="heading">
				<span>
					Change employee information{" "}
					<i className="bx bxs-chevrons-right"></i>
					<Link to="/" style={{ color: "#444" }}>
						{" "}
						Back to Home
					</Link>
				</span>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-grid">
					<div className="form-group">
						<div className="label">
							<label>Firstname</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Firstname"
								name="firstname"
								value={selectedEmployee.firstname}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Lastname</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Lastname"
								name="lastname"
								value={selectedEmployee.lastname}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Position</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Position"
								name="position"
								value={selectedEmployee.position}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Department</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Department"
								name="department"
								value={selectedEmployee.department}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Email</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Email"
								name="email"
								value={selectedEmployee.email}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Contact</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Contact"
								name="contact"
								value={selectedEmployee.contact}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Experience</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Experience"
								name="experience"
								value={selectedEmployee.experience}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Status</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Status"
								name="status"
								value={selectedEmployee.status}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="label">
							<label>Salary</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								onChange={handleChange}
								placeholder="Salary"
								name="salary"
								value={selectedEmployee.salary}
							/>
						</div>
					</div>
				</div>
				<Link to="/">
					<div
						className="btn"
						style={{ background: "#ff0000", fontSize: "13px" }}
					>
						CANCEL
					</div>
				</Link>

				<button className="btn">SAVE</button>
			</form>
		</>
	);
};

export default EditEmployee;
