import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div className="navbar">
					<div className="brand">Employee</div>
					<ul className="nav-lists">
						<li className="list-item">
							<Link to="/" className="nav-links">
								<i className="bx bx-bell"></i>
							</Link>
						</li>
						<li className="list-item">
							<Link to="/" className="nav-links">
								<i className="bx bx-message"></i>
							</Link>
						</li>
						<li className="list-item">
							<div className="img-link">
								<img
									src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
									alt="Lamp"
								/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
