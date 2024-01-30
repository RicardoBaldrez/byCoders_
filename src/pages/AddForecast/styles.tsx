import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - 120px);
`;

export const Content = styled.section`
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.4);
  & h1 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & label {
    display: flex;
    flex-direction: column;
  }
  & button {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background-color: #c6c6c6;
    transition: all 0.3s ease-in-out;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #212d48;
    }
  }
`;
