import React from 'react';
import styled from 'styled-components';
import ListOfFeedbacks from '@app/components/dashboards/feedback/components/ListOfFeedbacks/ListOfFeedbacks';
import AddFeedback from '@app/components/dashboards/feedback/components/AddFeedback/AddFeedback';

export const Feedback: React.FC = () => {
  return (
    <Container>
      <Title>Обратная связь</Title>
      <AddFeedback />
      <Title>Список обращений:</Title>
      <ListOfFeedbacks />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
`;
