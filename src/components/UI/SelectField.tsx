import { SelectLabel, SelectInput } from "../../styles/AllStyles.styles";
import { SelectFieldProps } from "../types/types";

const SelectField = ({
  label,
  name,
  value,
  options,
  onChange,
}: SelectFieldProps) => {
  return (
    <SelectLabel>
      {label && `${label}: `}
      <SelectInput name={name} value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </SelectInput>
    </SelectLabel>
  );
};

export default SelectField;
