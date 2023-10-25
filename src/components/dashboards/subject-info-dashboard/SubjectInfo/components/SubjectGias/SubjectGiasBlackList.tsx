import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { GiasBlackList } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  giasBlackList: GiasBlackList[];
};

const SubjectGiasBlackList: React.FC<MyComponentProps> = ({ giasBlackList }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(giasBlackList.length) && (
        <>
          <Card
            title="Реестр ГИАС временно не допускаемых к участию в процедурах гос.закупок"
            style={{ width: '100%' }}
          >
            <DataFieldDate name="Дата включения в реестр" content={giasBlackList[index].from_dttm} />
            <DataFieldDate name="Дата исключения из реестра" content={giasBlackList[index].to_dttm} />
            <DataField name="Основание включения в список" content={giasBlackList[index].basis_inclusion} />
            <DataField name="Основание исключения из списка" content={giasBlackList[index].basis_exclusion} />
          </Card>
          {Boolean(giasBlackList.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={giasBlackList.length}
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

export default SubjectGiasBlackList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
