import React from 'react';
import { Organization } from '@app/store/slices/search/searchSlice';
import { Badge, Descriptions } from 'antd';
import styled from 'styled-components';
import styles from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { Link } from 'react-router-dom';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useResponsive } from '@app/hooks/useResponsive';

type MyComponentProps = {
  subject: Organization;
};

const SubjectItem: React.FC<MyComponentProps> = ({ subject }) => {
  const { isTablet, mobileOnly } = useResponsive();
  const status = subject.status_code === 'AT' ? 'success' : 'error';

  return (
    <>
      {isTablet && (
        <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${subject.unn}`}>
          <Container>
            <Descriptions title={<Title>{subject.full_name}</Title>} column={4} size={'middle'} bordered>
              <Descriptions.Item style={styleDescription} label="УНП" span={2}>
                {subject.unn}
              </Descriptions.Item>
              <Descriptions.Item style={styleDescription} label="Дата регистрации" span={2}>
                {subject.date_reg}
              </Descriptions.Item>
              <Descriptions.Item style={styleDescription} label="Статус" span={2}>
                <Badge status={status} text={subject.status_name} />
              </Descriptions.Item>
              <Descriptions.Item style={styleDescription} label="Адрес" span={2}>
                {subject.full_address}
              </Descriptions.Item>
            </Descriptions>
          </Container>
        </Link>
      )}

      {mobileOnly && (
        <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${subject.unn}`}>
          <Container>
            <Title>{subject.full_name}</Title>
            <div>УНП: {subject.unn}</div>
          </Container>
        </Link>
      )}
    </>
  );
};

export default SubjectItem;

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

const styleDescription = {
  backgroundColor: 'var(--main-secondary-color)',
};
