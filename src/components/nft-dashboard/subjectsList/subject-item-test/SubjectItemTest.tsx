import React from 'react';
import { Organization, setSubjectUnn } from '@app/store/slices/searchSlice';
import { Badge, Descriptions } from 'antd';
import styled from 'styled-components';
import styles from '@app/components/nft-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@app/hooks/reduxHooks';

type MyComponentProps = {
  subject: Organization;
};

const SubjectItemTest: React.FC<MyComponentProps> = ({ subject }) => {
  const dispatch = useAppDispatch();
  const status = subject.status_code === 'AT' ? 'success' : 'error';

  const handleClick = (subUnn: string) => {
    dispatch(setSubjectUnn(subUnn));
  };

  return (
    <Link className={styles.link} to={'/medical-dashboard'} onClick={() => handleClick(subject.unn)}>
      <Container>
        <Descriptions title={<Title> {subject.full_address} </Title>} column={4} size={'small'} bordered>
          <Descriptions.Item label="УНП" span={2}>
            {subject.unn}
          </Descriptions.Item>
          <Descriptions.Item label="Дата регистрации" span={2}>
            {subject.date_reg}
          </Descriptions.Item>
          <Descriptions.Item label="Статусное имя" span={2}>
            <Badge status={status} text={subject.status_name} />
          </Descriptions.Item>
          <Descriptions.Item label="Статус код" span={2}>
            {subject.status_code}
          </Descriptions.Item>
          <Descriptions.Item label="Полный адрес" span={4}>
            {subject.full_address}
          </Descriptions.Item>
        </Descriptions>
      </Container>
    </Link>
  );
};

export default SubjectItemTest;

const Container = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #bdc0c1;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  text-align: center;
`;
