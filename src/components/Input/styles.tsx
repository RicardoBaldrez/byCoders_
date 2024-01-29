import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 500;
  & span {
    margin-bottom: -10px;
    & span {
      margin-left: 5px;
      color: #ff0000;
    }
  }
`;

export const InputElement = styled.input`
  font-size: 16px;
  margin-top: 1em;
  margin-bottom: 1.5em;
  padding: 0.75em 0.5em;
  border: none;
  width: calc(100% - 20px);
  border-radius: 5px;
  background-color: #f1f1f1;
  border-left: 0px solid #707070;
  transition: border-left 160ms;
  &:focus {
    outline: none;
    border-left: 7px solid #707070;
  }
`;
