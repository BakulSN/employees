import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmployeesForm from "../components/EmployeesForm";
import { updateEmployee } from "../store/employees/employeesSlice";
import { selectEmployeeById } from "../store/selectors";
import { Employee } from "../store/types";
import { Heading } from "../styles/AllStyles.styles";
import { useEffect } from "react";

const EmployeeEditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employeeSelector = selectEmployeeById(id!);
  const employee = useSelector(employeeSelector);
  
  useEffect(() => {
    if (!employee) {
      const timer = setTimeout(() => {
        navigate("/"); 
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [employee, navigate]);

  const handleSubmit = (data: Employee) => {
    dispatch(updateEmployee(data));
    navigate("/");
  };

  if (!employee) {
    return <Heading>Сотрудник не найден</Heading>;
  }

  return (
    <>
      <Heading>Редактировать сотрудника</Heading>
      <EmployeesForm initialValues={employee} onSubmit={handleSubmit} />
    </>
  );
};

export default EmployeeEditPage;


