import { EmployeeFieldProps } from "../types/types";

const EmployeeField = ({ label, value }: EmployeeFieldProps) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);
export default EmployeeField;
