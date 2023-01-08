import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employeesList",
    initialState: [],
    reducers: {
        // Action addEmployee => ajoute les données du nouvel employé
        addEmployee: (state, action) => {
            state.push(action.payload);
            return state;
        },
    },
})

// On extrait les actions et le reducer
const {actions, reducer} = employeesSlice;
// On exporte chaque action individuellement
export const { addEmployee } = actions;
// On exporte le reducer par défaut
export default reducer;