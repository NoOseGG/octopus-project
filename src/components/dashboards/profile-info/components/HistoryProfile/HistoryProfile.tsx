import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { formatDate } from '@app/utils/utils';
import { Timeline } from 'antd';
import styled from 'styled-components';

type TimeLineType = {
  children: string;
  label: string;
};

const HistoryProfile: React.FC = () => {
  const constituentDoc = useAppSelector((state) => state.searchProfile.profile.constituent_doc);

  return (
    <Container>
      <Title>История субъекта</Title>
      <Timeline mode={'alternate'}>
        {constituentDoc.map((item, index) => (
          <Timeline.Item key={index}>{TextDateLeft(item.event_name, item.from_dttm)}</Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
};

export default HistoryProfile;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const TextDateLeft = (text: string | null, date: string | null) => {
  return (
    <div>
      <div style={{ fontWeight: 600, textDecoration: 'underline' }}>{formatDate(date)}</div>
      <div>{text}</div>
    </div>
  );
};
