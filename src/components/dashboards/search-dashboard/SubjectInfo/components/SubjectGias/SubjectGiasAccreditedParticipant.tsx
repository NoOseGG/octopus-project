import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectGiasAccreditedParticipant: React.FC = () => {
  const gias_accredited_participant = useAppSelector(
    (state) => state.searchProfile.profile.gias_accredited_participant,
  );

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(gias_accredited_participant.length) && (
        <Container>
          <Card title="Реестр ГИАС аккредитованных участников" style={{ width: '100%' }}>
            <DataFieldDate name="Дата включения в реестр" content={gias_accredited_participant[index].from_dttm} />
            <DataFieldDate name="Дата исключения из реестра" content={gias_accredited_participant[index].to_dttm} />
          </Card>
          {Boolean(gias_accredited_participant.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={gias_accredited_participant.length}
              defaultPageSize={1}
              size={'small'}
              onChange={(page) => handleClick(page)}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default SubjectGiasAccreditedParticipant;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
