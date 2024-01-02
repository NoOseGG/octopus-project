import React from 'react';
import { SimilarSubject } from '@app/store/types/search/SearchSimilar';
import styled from 'styled-components';
import styles from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { Link } from 'react-router-dom';

type MyComponentProps = {
  subject: SimilarSubject;
};

const OneSimilar: React.FC<MyComponentProps> = ({ subject }) => {
  return (
    <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${subject.legal_entity_id}`} target={'_blank'}>
      <Container>
        <LineText>{subject.legal_entity_id}</LineText>
        <LineText>{subject.company_short_name}</LineText>
      </Container>
    </Link>
  );
};

export default OneSimilar;

const Container = styled.div`
  height: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LineText = styled.div`
  text-align: center;
`;
