import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 4px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - 120px);
`;

export const Content = styled.section`
  border: 4px solid red;
`;

export const Form = styled.form`
  border: 4px solid pink;
  display: flex;
  flex-direction: column;
`;
