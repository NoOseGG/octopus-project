import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetFeedbacks } from '@app/store/slices/feedback/feedbackSlice';
import { formatDate } from '@app/utils/utils';

const ListOfFeedbacks: React.FC = () => {
  const feedbacks = useAppSelector((state) => state.feedback.feedbacks.results);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetFeedbacks());
  }, [dispatch]);

  return (
    <Container>
      {Boolean(feedbacks.length) && (
        <>
          {feedbacks.map((item, index) => (
            <MessageContainer key={index}>
              <Text>{`${formatDate(item.created_at)} - `}</Text>
              <Text>{item.message}</Text>
              <br />
            </MessageContainer>
          ))}
        </>
      )}
    </Container>
  );
};

export default ListOfFeedbacks;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const MessageContainer = styled.div`
  text-align: left;
`;

const Text = styled.span``;
