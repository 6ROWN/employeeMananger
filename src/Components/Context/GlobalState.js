import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import GlobalContext from "./GlobalContext";
import { ADD, REMOVE, EDIT, FILTER } from "./types";

const GlobalState = (props) => {
	const initState = {
		employees: [],
	};

	const [state, dispatch] = useReducer(AppReducer, initState);

	//Actions
	//Add Employee
	const addEmployee = (employee) => {
		dispatch({
			type: ADD,
			payload: employee,
		});
	};

	//Edit Employee
	const editEmployee = (employee) => {
		dispatch({
			type: EDIT,
			
			payload: employee,
		});
	};

	//Filter
	const filterEmployee = (searchParams) => {
		dispatch({
			type: FILTER,
			payload: searchParams,
		});
	};

	//Remove Employee
	const removeEmployee = (id) => {
		dispatch({
			type: REMOVE,
			payload: id,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				employees: state.employees,
				removeEmployee,
				addEmployee,
				editEmployee,
				filterEmployee,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
