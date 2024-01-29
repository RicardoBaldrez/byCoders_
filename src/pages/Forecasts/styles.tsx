import styled from 'styled-components';

export const SectionCurrent = styled.section`
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

export const SectionDaily = styled.section`
  padding: 25px;
`;

export const ListLastSevenDays = styled.ul`
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  width: 350px;
  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #707070;
  }
`;

export const WrapperMaxMinTemp = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & p span {
    font-weight: bold;
  }
`;
