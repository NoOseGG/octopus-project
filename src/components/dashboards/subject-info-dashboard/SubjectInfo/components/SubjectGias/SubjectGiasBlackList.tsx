import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectGiasBlackList: React.FC = () => {
  const gias_black_list = useAppSelector((state) => state.searchProfile.profile.gias_black_list);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(gias_black_list.length) && (
        <Container>
          <Card
            title="Реестр ГИАС временно не допускаемых к участию в процедурах гос.закупок"
            style={{ width: '100%' }}
          >
            <DataFieldDate name="Дата включения в реестр" content={gias_black_list[index].from_dttm} />
            <DataFieldDate name="Дата исключения из реестра" content={gias_black_list[index].to_dttm} />
            <DataField name="Основание включения в список" content={gias_black_list[index].basis_inclusion} />
            <DataField name="Основание исключения из списка" content={gias_black_list[index].basis_exclusion} />
          </Card>
          {Boolean(gias_black_list.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={gias_black_list.length}
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

export default SubjectGiasBlackList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
