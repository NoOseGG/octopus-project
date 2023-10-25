import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { GiasAccreditedParticipant } from '@app/store/types/Subject';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  giasAccreditedPaticipant: GiasAccreditedParticipant[];
};

const SubjectGiasAccreditedParticipant: React.FC<MyComponentProps> = ({ giasAccreditedPaticipant }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(giasAccreditedPaticipant.length) && (
        <>
          <Card title="Реестр ГИАС аккредитованных участников" style={{ width: '100%' }}>
            <DataFieldDate name="Дата включения в реестр" content={giasAccreditedPaticipant[index].from_dttm} />
            <DataFieldDate name="Дата исключения из реестра" content={giasAccreditedPaticipant[index].to_dttm} />
          </Card>
          {Boolean(giasAccreditedPaticipant.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={giasAccreditedPaticipant.length}
              defaultPageSize={1}
              size={'small'}
              onChange={(page) => handleClick(page)}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default SubjectGiasAccreditedParticipant;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
