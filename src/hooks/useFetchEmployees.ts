import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../store/employees/employeesSlice";
import { selectAllEmployees } from "../store/selectors";

const useFetchEmployees = () => {
  const dispatch = useDispatch();
  const allEmployees = useSelector(selectAllEmployees);

  useEffect(() => {
    if (allEmployees.length === 0) {
      fetch(import.meta.env.BASE_URL + "db.json")
        .then((response) => {
          if (!response.ok) throw new Error("Ошибка при загрузке данных");
          return response.json();
        })
        .then((data) => {
          dispatch(setEmployees(data.employees));
        })
        .catch((error) => {
          console.error("Ошибка при загрузке сотрудников:", error);
        });
    }
  }, [dispatch, allEmployees.length]);
};

export default useFetchEmployees;
