import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-inline: 50px;
`;

export const NameComponent = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
`;

export const AgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
`;

export const Content = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
`;

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-inline: 20px;
`;

export const AverageAgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const PieContainer = styled.div`
  flex-grow: 2;
`;
