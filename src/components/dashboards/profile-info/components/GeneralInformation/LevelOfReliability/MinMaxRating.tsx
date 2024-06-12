import React from 'react';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

type Props = {
  min: number | undefined;
  max: number | undefined;
};

const MinMaxRating: React.FC<Props> = ({ min, max }) => {
  return (
    <>
      {min && max && (
        <Container>
          <S.Title>Показатели оценки у прямых конкурентов (Баллы)</S.Title>
          <RatingContainer>
            <span>
              <Name>Минимум</Name> - <Red>{min}</Red>
            </span>
            <span>
              <Name>Максимум</Name> - <Green>{max}</Green>
            </span>
          </RatingContainer>
        </Container>
      )}
    </>
  );
};

export default MinMaxRating;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const RatingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

const Name = styled.span`
  font-weight: 550;
`;

const Red = styled.span`
  color: red;
`;

const Green = styled.span`
  color: green;
`;
