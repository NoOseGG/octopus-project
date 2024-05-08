import React, { useEffect, useState } from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { ColumnsType } from 'antd/es/table/Table';
import { Table } from 'antd';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';

const GiasTest: React.FC = () => {
  const gias_accredited_customer = useAppSelector((state) => state.searchProfile.profile.gias_accredited_customer);
  const gias_accredited_participant = useAppSelector(
    (state) => state.searchProfile.profile.gias_accredited_participant,
  );
  const gias_black_list = useAppSelector((state) => state.searchProfile.profile.gias_black_list);
  const gias_complaint_submit = useAppSelector((state) => state.searchProfile.profile.gias_complaint_submit);
  const gias_complaint_receive = useAppSelector((state) => state.searchProfile.profile.gias_complaint_receive);

  const [gias, setGias] = useState<{ name: string; from_dttm: string | null }[]>([]);

  useEffect(() => {
    if (!!gias_accredited_customer[0]?.from_dttm) {
      setGias((prev) => [
        ...prev,
        { name: 'Реестр аккредитованных заказчиков', from_dttm: formatDate(gias_accredited_customer[0]?.from_dttm) },
      ]);
    }
  }, [gias_accredited_customer]);

  useEffect(() => {
    if (!!gias_accredited_participant[0]?.from_dttm) {
      setGias((prev) => [
        ...prev,
        { name: 'Реестр аккредитованных участников', from_dttm: formatDate(gias_accredited_participant[0]?.from_dttm) },
      ]);
    }
  }, [gias_accredited_participant]);

  useEffect(() => {
    if (!!gias_black_list[0]?.from_dttm) {
      setGias((prev) => [
        ...prev,
        {
          name: 'Реестр временно не допускаемых к участию в процедурах гос.закупок',
          from_dttm: formatDate(gias_black_list[0]?.from_dttm),
        },
      ]);
    }
  }, [gias_black_list]);

  useEffect(() => {
    if (!!gias_complaint_submit[0]?.from_dttm) {
      setGias((prev) => [
        ...prev,
        {
          name: 'Реестр жалоб которые отправлял субъект',
          from_dttm: formatDate(gias_complaint_submit[0]?.from_dttm),
        },
      ]);
    }
  }, [gias_complaint_submit]);

  useEffect(() => {
    if (!!gias_complaint_receive[0]?.from_dttm) {
      setGias((prev) => [
        ...prev,
        {
          name: 'Реестр жалоб которые получал субъект',
          from_dttm: formatDate(gias_complaint_receive[0]?.from_dttm),
        },
      ]);
    }
  }, [gias_complaint_receive]);

  const columns: ColumnsType<{ name: string; from_dttm: string | null }> = [
    {
      key: 'name',
      title: <TableTitle>Наименование</TableTitle>,
      dataIndex: 'name',
      width: 70,
      render: (text) => <TableText>{text}</TableText>,
    },
    {
      key: 'from_dttm',
      title: <TableTitle>Дата включения</TableTitle>,
      dataIndex: 'from_dttm',
      width: 30,
      align: 'center',
      render: (text) => <TableText>{text}</TableText>,
    },
  ];

  return (
    <>
      {Boolean(gias.length) && (
        <S.Container>
          <S.Title>Реестры и иные государственные регистры</S.Title>
          <Table
            columns={columns}
            dataSource={gias}
            title={() => <TableText />}
            size={'small'}
            pagination={gias.length <= 5 ? false : { pageSize: 5 }}
          />
          <S.MyDivider />
        </S.Container>
      )}
    </>
  );
};

export default GiasTest;

const TableTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const TableText = styled.span`
  font-size: 14px;
`;
