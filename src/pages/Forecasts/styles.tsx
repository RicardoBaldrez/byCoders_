import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 40px 40px 40px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const SectionCurrent = styled.section`
  margin: 0 40px 40px 0;
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
  margin: 0 40px 40px 0;
`;

export const ListLastSevenDays = styled.ul`
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
