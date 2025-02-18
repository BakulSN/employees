import { Employee } from "../../store/types";
import { Options } from "../types/types";

export const roleFormOptions: Options = [
  { value: "", label: "Выберите должность", disabled: true },
  { value: "cook", label: "Повар" },
  { value: "waiter", label: "Официант" },
  { value: "driver", label: "Водитель" },
];

export const roleFilterOptions: Options = [
  { value: "", label: "Все" },
  { value: "cook", label: "Повар" },
  { value: "waiter", label: "Официант" },
  { value: "driver", label: "Водитель" },
];

export const sortOptions: Options = [
  { value: "", label: "Без сортировки" },
  { value: "name", label: "Имя" },
  { value: "birthday", label: "Дата рождения" },
];

export const defaultFormData: Employee = {
  id: "",
  name: "",
  phone: "",
  birthday: "",
  role: null,
  isArchive: false,
};
