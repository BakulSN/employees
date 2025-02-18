import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectAllEmployees = (state: RootState) => state.employees.list;

export const selectEmployeeFilter = (state: RootState) =>
  state.employees.filter;

export const selectSortBy = (state: RootState) => state.employees.sortBy;

export const selectEmployeeById = (id: number | string) =>
  createSelector([selectAllEmployees], (list) =>
    list.find((emp) => String(emp.id) === String(id))
  );

export const selectFilteredEmployees = createSelector(
  [selectAllEmployees, selectEmployeeFilter],
  (list, filter) => {
    if (!filter) return list;

    return list.filter((emp) => {
      const matchesRole = filter.role ? emp.role === filter.role : true;

      const matchesArchive =
        filter.isArchive !== null ? emp.isArchive === filter.isArchive : true;

      return matchesRole && matchesArchive;
    });
  }
);

export const selectFilteredAndSortedEmployees = createSelector(
  [selectFilteredEmployees, selectSortBy],
  (filteredList, sortBy) => {
    if (!sortBy) return filteredList;

    return [...filteredList].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "birthday") {
        const parseDate = (dateStr: string) => {
          const [day, month, year] = dateStr.split(".");
          return new Date(`${year}-${month}-${day}`);
        };

        const dateA = parseDate(a.birthday);
        const dateB = parseDate(b.birthday);

        return dateA.getTime() - dateB.getTime();
      }
      return 0;
    });
  }
);
