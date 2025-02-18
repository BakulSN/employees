import { useEffect, useRef } from "react";
import SelectField from "./UI/SelectField";
import { FilterPanelProps } from "./types/types";
import { roleFilterOptions } from "./constants/const";
import {
  Container,
  Heading,
  CheckboxContainer,
  DangerButton,
} from "../styles/AllStyles.styles";

const FilterPanel = ({
  selectedRole,
  archiveFilter,
  onRoleChange,
  onArchiveChange,
  onReset,
}: FilterPanelProps) => {
  const archiveCheckboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (archiveCheckboxRef.current) {
      archiveCheckboxRef.current.indeterminate = archiveFilter === null;
    }
  }, [archiveFilter]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRoleChange(e.target.value);
  };

  const handleArchiveClick = () => {
    let newValue: boolean | null;
    if (archiveFilter === null) {
      newValue = true;
    } else if (archiveFilter === true) {
      newValue = false;
    } else {
      newValue = null;
    }
    onArchiveChange(newValue);
  };

  const getArchiveLabel = () => {
    if (archiveFilter === null) return "Все";
    return archiveFilter ? "В архиве" : "Не в архиве";
  };

  const archiveLabel = getArchiveLabel();
  const isResetDisabled = selectedRole === "" && archiveFilter === null;

  return (
    <Container>
      <Heading>Фильтрация</Heading>

      <SelectField
        label="Должность"
        value={selectedRole}
        options={roleFilterOptions}
        onChange={handleRoleChange}
      />

      <CheckboxContainer>
        <input
          type="checkbox"
          ref={archiveCheckboxRef}
          checked={archiveFilter === true}
          onClick={handleArchiveClick}
          readOnly
        />
        {archiveLabel}
      </CheckboxContainer>

      <DangerButton onClick={onReset} disabled={isResetDisabled}>
        Сбросить фильтры
      </DangerButton>
    </Container>
  );
};

export default FilterPanel;
