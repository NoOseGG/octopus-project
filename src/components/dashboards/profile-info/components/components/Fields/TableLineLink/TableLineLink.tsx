import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import styled from 'styled-components';
import styles from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { Link } from 'react-router-dom';

type MyComponentProps = {
  name: string | null | undefined;
  field: string | null | undefined;
};

const TableLineLink: React.FC<MyComponentProps> = ({ name, field }) => {
  return (
    <>
      {name && field && (
        <S.StyledRow>
          <S.LeftCell>
            <S.Text>{name}</S.Text>
          </S.LeftCell>
          <S.RightCell>
            <Text>
              <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${field}`} target={'_blank'}>
                {field}
              </Link>
            </Text>
          </S.RightCell>
        </S.StyledRow>
      )}
    </>
  );
};

export default TableLineLink;

const Text = styled.div`
  font-size: 0.9374rem;
  line-height: 1.47;
  white-space: pre-wrap;
  text-decoration: underline;
`;
