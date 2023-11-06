import React from 'react';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';
import { Popover, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectName: React.FC = () => {
  const names = useAppSelector((state) => state.searchProfile.profile.names);

  const contentFullName = () => {
    return (
      <Table style={{ width: 'auto' }} dataSource={names} bordered={true} size={'small'} tableLayout={'auto'}>
        <Column title="Полное название" dataIndex="full_name" key="full_name" showSorterTooltip={false} width={500} />
        <Column title="Дата начала действия" dataIndex="from_dttm" key="from_dttm" showSorterTooltip={false} />
        <Column title="Дата окончания действия" dataIndex="to_dttm" key="to_dttm" showSorterTooltip={false} />
      </Table>
    );
  };

  const contentShortName = () => {
    return (
      <Table dataSource={names} bordered={true} size={'small'} tableLayout={'auto'}>
        <Column title="Краткое наименование" dataIndex="short_name" key="short_name" showSorterTooltip={false} />
        <Column title="Дата начала действия" dataIndex="from_dttm" key="from_dttm" showSorterTooltip={false} />
        <Column title="Дата окончания действия" dataIndex="to_dttm" key="to_dttm" showSorterTooltip={false} />
      </Table>
    );
  };

  return (
    <>
      {Boolean(names.length) && (
        <>
          <Title>
            {names[0].full_name}
            <Popover placement={'bottomLeft'} title="Список полных названий" content={contentFullName()}>
              <CaretDownOutlined />
            </Popover>
          </Title>
          <SubTitle>
            ({names[0].short_name})
            <Popover placement={'bottomLeft'} title="Список сокращенных названий" content={contentShortName()}>
              <CaretDownOutlined />
            </Popover>
          </SubTitle>
        </>
      )}
    </>
  );
};

export default SubjectName;

const Title = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;
