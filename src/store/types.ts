export type Roles = "driver" | "waiter" | "cook";

export interface Employee {
  id: number | string;
  name: string;
  isArchive: boolean;
  role: Roles | null;
  phone: string;
  birthday: string;
}

export interface EmployeeFilter {
  role: Roles | null;
  isArchive: boolean | null;
}

export type SortParams = "name" | "birthday";

export interface EmployeesState {
  list: Employee[];
  sortBy: SortParams | null;
  filter: EmployeeFilter | null;
}
