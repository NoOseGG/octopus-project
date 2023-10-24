import React from 'react';
import { Name } from '@app/store/types/Subject';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

type MyComponentProps = {
  names: Name[];
};

const SubjectName: React.FC<MyComponentProps> = ({ names }) => {
  let count = 0;

  const contentFullName = () => {
    return names.map((name) => <div key={count++}>{name.full_name}</div>);
  };

  const contentShortName = () => {
    return names.map((name) => <div key={count++}>{name.short_name}</div>);
  };

  return (
    <>
      <Title>
        {names[0].full_name}
        <Popover placement={'bottomLeft'} title="Список полных названий" content={contentFullName()}>
          <CaretDownOutlined />
        </Popover>
      </Title>
      <SubTitle>
        ({names[0].short_name})
        <Popover placement={'bottomLeft'} title="Список сокращенных названийcha" content={contentShortName()}>
          <CaretDownOutlined />
        </Popover>
      </SubTitle>
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
