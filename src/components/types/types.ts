import { Employee, SortParams } from "../../store/types";

export interface EmployeeFieldProps {
  label: string;
  value: string;
}

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}
export type Options = Option[];

export interface SelectFieldProps {
  label?: string;
  name?: string;
  value: string;
  options: Options;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface EmployeesFormProps {
  initialValues?: Employee;
  onSubmit: (data: Employee) => void;
}

export interface FilterPanelProps {
  selectedRole: string;
  archiveFilter: boolean | null;
  onRoleChange: (role: string) => void;
  onArchiveChange: (value: boolean | null) => void;
  onReset: () => void;
}

export interface SortSelectorProps {
  currentSort: string | null;
  onSortChange: (sort: SortParams | null) => void;
}

export interface EmployeeCardProps {
  employee: Employee;
}
