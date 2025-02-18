import { SortParams } from "../store/types";
import { Container, Heading } from "../styles/AllStyles.styles";
import SelectField from "./UI/SelectField";
import { sortOptions } from "./constants/const";
import { SortSelectorProps } from "./types/types";

const SortSelector = ({ currentSort, onSortChange }: SortSelectorProps) => {
  const handleSortChangeEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : (e.target.value as SortParams);
    onSortChange(value);
  };

  return (
    <Container>
      <Heading>Сортировка</Heading>
      <SelectField
        label="Сортировать по"
        value={currentSort || ""}
        options={sortOptions}
        onChange={handleSortChangeEvent}
      />
    </Container>
  );
};

export default SortSelector;
