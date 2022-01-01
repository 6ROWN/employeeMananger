import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import { useNavigate } from "react-router";

const AddEmployee = () => {
	const { addEmployee } = useContext(GlobalContext);

	const navigate = useNavigate();

	const [employee, SetEmployee] = useState({
		id: Date.now(),
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

	const handleSubmit = (e) => {
		e.preventDefault();
		addEmployee(employee);
		navigate("/");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		SetEmployee({
			...employee,
			[name]: value,
		});
	};

	return (
		<>
			<div className="heading">
				<span>
					Add new employee to list{" "}
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
								value={employee.firstname}
								required
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
								value={employee.lastname}
								required
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
								value={employee.position}
								required
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
								value={employee.department}
								required
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
								value={employee.email}
								required
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
								value={employee.contact}
								required
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
								value={employee.experience}
								required
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
								value={employee.status}
								required
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
								value={employee.salary}
								required
							/>
						</div>
					</div>
				</div>
				<button className="btn">SAVE</button>
			</form>
		</>
	);
};

export default AddEmployee;
