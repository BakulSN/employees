import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import EmployeesForm from "../components/EmployeesForm";
import { addEmployee } from "../store/employees/employeesSlice";
import { Employee } from "../store/types";
import { Heading } from "../styles/AllStyles.styles";

const AddEmployeePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: Employee) => {
    const newEmployee = { ...data, id: uuidv4() };
    dispatch(addEmployee(newEmployee));
    navigate("/");
  };

  return (
    <>
      <Heading>Добавить сотрудника</Heading>
      <EmployeesForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddEmployeePage;
