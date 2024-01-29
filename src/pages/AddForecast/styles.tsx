import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 4px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - 120px);
  background-image: url('https://i.pinimg.com/736x/aa/6c/4a/aa6c4ae88d3ff228a6043e2c21e323bc.jpg');
  background-repeat: no-repeat;
  background-size: cover;
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
  }
`;
