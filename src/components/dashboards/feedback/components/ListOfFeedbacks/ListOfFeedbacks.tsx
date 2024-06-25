import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetFeedbacks } from '@app/store/slices/feedback/feedbackSlice';
import styled from 'styled-components';
import { ColumnsType } from 'antd/es/table';
import { FeedbackObject } from '@app/store/types/feedback/FeedbackTypes';
import { Table } from 'antd';
import { formatDate } from '@app/utils/utils';

const ListOfFeedbacks: React.FC = () => {
  const { results } = useAppSelector((state) => state.feedback.feedbacks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetFeedbacks());
  }, [dispatch]);

  useEffect(() => {
    console.log(JSON.stringify(results));
  }, [results]);

  const columns: ColumnsType<FeedbackObject> = [
    {
      title: 'Дата',
      dataIndex: 'created_at',
      align: 'center',
      render: (text) => formatDate(text),
    },
    {
      title: 'Сообщение',
      dataIndex: 'message',
    },
  ];

  return (
    <Container>
      {Boolean(results.length) && (
        <>
          <Table columns={columns} dataSource={results} size={'small'} />
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
