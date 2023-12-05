import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/search/searchProfileSlice';
import { Col, Row, Spin } from 'antd';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/profile-info/components/GeneralInformation/MainInfo/MainInfo';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import Contacts from '@app/components/dashboards/profile-info/components/GeneralInformation/Contacts/Contacts';
import Favourite from '@app/components/dashboards/profile-info/components/components/Buttons/Favourite/Favourite';
import BasicDetails from '@app/components/dashboards/profile-info/components/GeneralInformation/BasicDetails/BasicDetails';
import Requisites from '@app/components/dashboards/profile-info/components/components/Buttons/Requisites/Requisites';
import TypeActivities from '@app/components/dashboards/profile-info/components/GeneralInformation/TypeActivities/TypeActivities';

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
    <ProfileContainer>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" tip="Загрузка данных . . ." />
        </SpinnerSpace>
      ) : (
        <ProfileRow>
          <LeftCol span={19}>
            <Description />
            <MainInfo />
            <Contacts />
            <BasicDetails />
            <TypeActivities />
          </LeftCol>
          <RightCol span={5}>
            <Requisites />
            {unn && <Favourite unn={unn} />}
          </RightCol>
        </ProfileRow>
      )}
    </ProfileContainer>
  );
};

export default ProfileInfo;

const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  flex-grow: 1;
`;

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

const RightCol = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
