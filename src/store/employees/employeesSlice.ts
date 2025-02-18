import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeesState, Employee, SortParams, EmployeeFilter } from "../types";

const initialState: EmployeesState = {
  list: [],
  sortBy: null,
  filter: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees(state, action: PayloadAction<Employee[]>) {
      state.list = action.payload;
    },

    updateEmployee(state, action: PayloadAction<Employee>) {
      const index = state.list.findIndex((emp) => emp.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },

    addEmployee(state, action: PayloadAction<Employee>) {
      state.list = [action.payload, ...state.list];
    },

    setSortBy(state, action: PayloadAction<SortParams | null>) {
      state.sortBy = action.payload;
    },

    setFilter(state, action: PayloadAction<EmployeeFilter | null>) {
      state.filter = action.payload;
    },

    resetFilter(state) {
      state.filter = null;
    },
  },
});

export const {
  setEmployees,
  updateEmployee,
  addEmployee,
  setSortBy,
  setFilter,
  resetFilter,
} = employeesSlice.actions;
export default employeesSlice.reducer;
