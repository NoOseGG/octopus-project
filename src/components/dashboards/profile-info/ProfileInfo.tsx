import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/search/searchProfileSlice';
import { Col, Row, Spin } from 'antd';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/profile-info/components/MainInfo/MainInfo';
import Description from '@app/components/dashboards/profile-info/components/Description/Description';
import Contacts from '@app/components/dashboards/profile-info/components/Contacts/Contacts';
import Favourite from '@app/components/dashboards/profile-info/components/Buttons/Favourite/Favourite';

const ProfileInfo: React.FC = () => {
  const { unn } = useParams();
  const { loading, error } = useAppSelector((state) => state.searchProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      if (typeof unn === 'string') {
        dispatch(doSearchProfile(unn));
      }
    } catch (error) {
      console.log(error);
    }
  }, [unn, dispatch]);

  return (
    <>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" tip="Загрузка данных . . ." />
        </SpinnerSpace>
      ) : (
        <ProfileRow>
          <LeftCol span={20}>
            <Description />
            <MainInfo />
            <Contacts />
          </LeftCol>
          <RightCol span={4}>
            <Favourite />
          </RightCol>
        </ProfileRow>
      )}
    </>
  );
};

export default ProfileInfo;

const SpinnerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileRow = styled(Row)`
  margin-inline: 100px;
`;

const LeftCol = styled(Col)``;

const RightCol = styled(Col)``;
