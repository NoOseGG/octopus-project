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
  const items: TimeLineType[] = constituentDoc?.map((item) => {
    return {
      children: `${formatDate(item.from_dttm)} - ${item.event_name} `,
      label: '',
    };
  });

  return (
    <Container>
      <Title>История субъекта</Title>
      <Timeline mode={'alternate'}>
        {items.map((item, index) => (
          <Timeline.Item key={index}>{item.children}</Timeline.Item>
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
