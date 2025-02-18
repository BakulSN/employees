import styled from "styled-components";

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const BaseLabel = styled.label`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Heading = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 16px;
`;

export const BaseButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  padding: 8px 12px;
  background-color: #dbcfcf;

  &:hover {
    background-color: #acaaaa;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DangerButton = styled(BaseButton)`
  background-color: #dc3545;
  color: #fff;

  &:hover {
    background-color: #c82333;
  }

  &:disabled {
    background-color: #e0a4aa;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  background: #fff;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Container = styled.div`
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CheckboxContainer = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
`;

export const SelectInput = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 4px;
`;

export const SelectLabel = styled.label`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
