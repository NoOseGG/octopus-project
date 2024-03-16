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
        <InnerContainer>
          {subject.company_short_name ? (
            <Title>{subject.company_short_name}</Title>
          ) : (
            <Title>{subject.company_full_name}</Title>
          )}
          <LineText>
            <strong>унп:</strong> {subject.legal_entity_id}
          </LineText>
          <LineText>
            <strong>адрес:</strong> {subject.address_full}
          </LineText>
          <LineText>
            <strong>возраст:</strong> {subject.age_full}
          </LineText>
        </InnerContainer>
      </Container>
    </Link>
  );
};

export default OneSimilar;

// const Container = styled.div`
//   height: 100%;
//   background-color: white;
//   border: 1px solid black;
//   border-radius: 12px;
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

const WIDTH = 150;
const HEIGHT = 220;

const Container = styled.div`
  width: ${`${WIDTH}px`};
  height: ${`${HEIGHT}px`};
  border-radius: 12px;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
  }
`;

const InnerContainer = styled.div`
  width: ${`${WIDTH - 10}px`};
  height: ${`${HEIGHT - 10}px`};
  padding: 5px;
  background-color: #f2f2f2;
  border-radius: 12px;

  &:hover {
    width: ${`${WIDTH}px`};
    height: ${`${HEIGHT}px`};
    padding: 10px;
    border: none;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 650;
  line-height: 1.1;
  margin-top: 5px;
  margin-bottom: 5px;
  word-break: break-word;
`;

const LineText = styled.div`
  font-size: 12px;
  word-break: break-word;
`;
