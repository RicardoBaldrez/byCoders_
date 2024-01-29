import styled from 'styled-components';

export const Section = styled.section`
  border: 2px solid red;
  padding: 25px;
`;

export const WrapperCardContent = styled.section`
  padding: 25px;
  border-radius: 5px;
  background-color: #fff;
`;

export const HeaderCard = styled.header`
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

export const ContentDetails = styled.div`
  color: #707070;
  margin: 10px 0 10px 0;
  & p {
    border-bottom: 1px solid;
    padding: 20px 0 10px 0;
    display: flex;
    justify-content: space-between;
  }
  & p span {
    font-weight: bold;
    margin-left: 15px;
  }
`;
