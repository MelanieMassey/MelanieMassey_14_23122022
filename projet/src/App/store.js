import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../Feature/employeesSlice";

export const store = configureStore({
    reducer: {
      employeesList: employeesReducer,
    }
  });