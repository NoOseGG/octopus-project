import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  totalCountCreated: number;
  totalCountCreatedLastYear: number;
  totalCountCreatedLastQuarter: number;
  totalCountOperatingCompany: number;
  percent: number;
};

const MainInfo: React.FC<MyComponentProps> = ({
  totalCountCreated,
  totalCountCreatedLastYear,
  totalCountCreatedLastQuarter,
  totalCountOperatingCompany,
  percent,
}) => {
  return (
    <Container>
      <Block>
        <Title>Общее количество созданных компаний</Title>
        <Content>{totalCountCreated}</Content>
      </Block>
      <Block>
        <Title>Количество созданных компаний (год)</Title>
        <Content>
          {totalCountCreatedLastYear} <Percent number={percent}>({percent}%)</Percent>
        </Content>
      </Block>
      <Block>
        <Title>Количество созданных компаний (квартал)</Title>
        <Content>{totalCountCreatedLastQuarter}</Content>
      </Block>
      <Block>
        <Title>Действующие компании</Title>
        <Content>{totalCountOperatingCompany}</Content>
      </Block>
    </Container>
  );
};

export default MainInfo;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;

interface PercentWithProps {
  number: number;
}

const Percent = styled.span<PercentWithProps>`
  color: ${(props) => {
    const number = props.number;
    if (number > 0) {
      return 'green';
    } else if (number < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }};
  font-size: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const Content = styled.div`
  font-size: 42px;
  font-weight: 700;
`;
