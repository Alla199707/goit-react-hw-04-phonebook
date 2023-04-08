import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
  padding: 0;
`;
export const ListItem = styled.li`
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
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
    transform: scale(1.1);
    box-shadow: 5px 1px 1px BlueViolet;
  }
`;
