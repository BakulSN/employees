import { useState } from "react";
import { Employee, Roles } from "../store/types";
import SelectField from "./UI/SelectField";
import { EmployeesFormProps } from "./types/types";
import { defaultFormData, roleFormOptions } from "./constants/const";
import { FormContainer, StyledInputMask } from "../styles/EmployeesForm.styles";
import {
  BaseLabel,
  CheckboxContainer,
  Input,
  PrimaryButton,
} from "../styles/AllStyles.styles";

const EmployeesForm = ({ initialValues, onSubmit }: EmployeesFormProps) => {
  const [formData, setFormData] = useState<Employee>(
    initialValues || defaultFormData
  );

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMaskInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: keyof Employee
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value as Roles,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <BaseLabel>
        Имя:
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleTextInputChange}
          required
        />
      </BaseLabel>

      <BaseLabel>
        Телефон:
        <StyledInputMask
          type="text"
          mask="+7 (___) ___-____"
          replacement={{ _: /\d/ }}
          value={formData.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleMaskInputChange(e, "phone")
          }
          placeholder="+7 (___) ___-____"
          required
        />
      </BaseLabel>

      <BaseLabel>
        Дата рождения:
        <StyledInputMask
          mask="dd.mm.yyyy"
          replacement={{
            d: /[0-3]/,
            m: /[0-2]/,
            y: /\d/,
          }}
          value={formData.birthday}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleMaskInputChange(e, "birthday")
          }
          placeholder="день_месяц_год"
          required
        />
      </BaseLabel>

      <SelectField
        label="Должность"
        name="role"
        value={formData.role || ""}
        options={roleFormOptions}
        onChange={handleSelectChange}
      />

      <CheckboxContainer>
        <input
          type="checkbox"
          name="isArchive"
          checked={formData.isArchive}
          onChange={handleCheckboxChange}
        />
        В архиве
      </CheckboxContainer>

      <PrimaryButton type="submit">Сохранить</PrimaryButton>
    </FormContainer>
  );
};

export default EmployeesForm;
