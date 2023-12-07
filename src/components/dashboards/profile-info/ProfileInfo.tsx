import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/search/searchProfileSlice';
import { Col, Row, Spin, Tabs } from 'antd';
import styled from 'styled-components';
import Requisites from '@app/components/dashboards/profile-info/components/components/Buttons/Requisites/Requisites';
import GeneralInformation from '@app/components/dashboards/profile-info/components/GeneralInformation/GeneralInformation';
import Favourite from '@app/components/dashboards/profile-info/components/components/Buttons/Favourite/Favourite';
import Vacancies from '@app/components/dashboards/profile-info/components/Vacancies/Vacancies';

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
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Основаная информация" key="1">
            <ProfileRow>
              <LeftCol span={19}>
                <GeneralInformation />
              </LeftCol>
              <RightCol span={5}>
                <Requisites />
                {unn && <Favourite unn={unn} />}
              </RightCol>
            </ProfileRow>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Вакансии" key="2">
            <ProfileRow>
              <LeftCol span={19}>
                <Vacancies />
              </LeftCol>
              <RightCol span={5}>
                <Requisites />
                {unn && <Favourite unn={unn} />}
              </RightCol>
            </ProfileRow>
          </Tabs.TabPane>
        </Tabs>
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
