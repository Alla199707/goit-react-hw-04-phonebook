import styled from 'styled-components';

export const Forma = styled.form`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 8px 0;
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 3px;
  border-radius: 8px;
  margin-left: 10px;
  height: 20px;
  width: 350px;
  cursor: pointer;
`;

export const Button = styled.button`
  height: 30px;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  background-color: DodgerBlue;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 1px 1px BlueViolet;
  }
`;
