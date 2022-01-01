import { ADD, REMOVE, EDIT, FILTER } from "./types";

const AppReducer = (state, action) => {
	switch (action.type) {
		case ADD:
			return {
				...state,
				employees: [...state.employees, action.payload],
			};

		case EDIT:
			const updatedEmployee = action.payload;
			const updatedEmployees = state.employees.map((employee) => {
				if (employee.id === updatedEmployee.id) {
					return updatedEmployee;
				}
				return employee;
			});

			return {
				...state,
				employees: updatedEmployees,
			};

		case FILTER:
			const filteredEmployee = state.employees.filter((employee) => {
				if (action.payload.length !== "") {
					return Object.values(employee)
						.join("")
						.toLowerCase()
						.includes(action.payload.toLowerCase());
				}
				return employee;
			});

			return {
				...state,
				employees: filteredEmployee,
			};

		case REMOVE:
			return {
				...state,
				employees: state.employees.filter(
					(employee) => employee.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default AppReducer;
