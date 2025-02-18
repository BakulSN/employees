import { useNavigate } from "react-router-dom";
import EmployeeField from "./UI/EmployeeField";
import { EmployeeCardProps } from "./types/types";
import { BaseButton, Card, Heading } from "../styles/AllStyles.styles";

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const navigate = useNavigate();
  const { name, role, phone, birthday, isArchive } = employee;

  const handleEditClick = () => {
    navigate(`/employee/${employee.id}`);
  };

  return (
    <Card>
      <Heading>{name}</Heading>

      <EmployeeField label="Должность" value={role ? role : "Не указана"} />
      <EmployeeField label="Телефон" value={phone} />
      <EmployeeField label="Дата рождения" value={birthday} />
      <EmployeeField label="Архив" value={isArchive ? "Да" : "Нет"} />

      <BaseButton onClick={handleEditClick}>Редактировать</BaseButton>
    </Card>
  );
};

export default EmployeeCard;
