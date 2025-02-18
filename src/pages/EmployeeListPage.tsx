import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  resetFilter,
  setFilter,
  setSortBy,
} from "../store/employees/employeesSlice";
import {
  selectAllEmployees,
  selectFilteredAndSortedEmployees,
  selectSortBy,
} from "../store/selectors";
import { Roles, SortParams } from "../store/types";
import EmployeeCard from "../components/EmployeeCard";
import FilterPanel from "../components/FilterPanel";
import SortSelector from "../components/SortSelector";
import useFetchEmployees from "../hooks/useFetchEmployees";
import {
  HeaderContainer,
  Heading,
  PrimaryButton,
} from "../styles/AllStyles.styles";

const EmployeeListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employees = useSelector(selectFilteredAndSortedEmployees);
  const allEmployees = useSelector(selectAllEmployees);
  const currentSort = useSelector(selectSortBy);

  const [selectedRole, setSelectedRole] = useState("");
  const [archiveFilter, setArchiveFilter] = useState<boolean | null>(null);

  useFetchEmployees();

  useEffect(() => {
    dispatch(
      setFilter({
        role: selectedRole ? (selectedRole as Roles) : null,
        isArchive: archiveFilter,
      })
    );
  }, [selectedRole, archiveFilter, dispatch]);

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const handleArchiveChange = (value: boolean | null) => {
    setArchiveFilter(value);
  };

  const handleSortChange = (sort: SortParams | null) => {
    dispatch(setSortBy(sort));
  };

  const handleResetFilter = () => {
    setSelectedRole("");
    setArchiveFilter(null);
    dispatch(resetFilter());
  };

  return (
    <>
      <Heading>Список сотрудников</Heading>
      <HeaderContainer>
        <FilterPanel
          selectedRole={selectedRole}
          archiveFilter={archiveFilter}
          onRoleChange={handleRoleChange}
          onArchiveChange={handleArchiveChange}
          onReset={handleResetFilter}
        />

        <SortSelector
          currentSort={currentSort}
          onSortChange={handleSortChange}
        />
      </HeaderContainer>

      <>
        <PrimaryButton onClick={() => navigate("/add")}>
          Добавить сотрудника
        </PrimaryButton>
        <p>
          Отображено {employees.length} из {allEmployees.length} сотрудников
        </p>
      </>

      <>
        {employees && employees.length > 0 ? (
          employees.map((emp) => <EmployeeCard key={emp.id} employee={emp} />)
        ) : (
          <div>Нет сотрудников</div>
        )}
      </>
    </>
  );
};

export default EmployeeListPage;
