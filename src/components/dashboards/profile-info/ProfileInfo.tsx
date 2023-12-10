import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/search/searchProfileSlice';
import { Col, Row, Spin, Tabs } from 'antd';
import styled from 'styled-components';
import GeneralInformation from '@app/components/dashboards/profile-info/components/GeneralInformation/GeneralInformation';
import Vacancies from '@app/components/dashboards/profile-info/components/Vacancies/Vacancies';
import TabButton from '@app/components/dashboards/profile-info/components/components/Buttons/TabButton/TabButton';
import SiderMenu from '@app/components/dashboards/profile-info/components/SiderMenu/SiderMenu';
import Resumes from '@app/components/dashboards/profile-info/components/Resumes/Resumes';

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
          <Tabs.TabPane tab={<TabButton>Основная информация</TabButton>} key="1">
            <ProfileRow>
              <LeftCol span={19}>
                <GeneralInformation />
              </LeftCol>
              <RightCol span={5}>
                <SiderMenu />
              </RightCol>
            </ProfileRow>
          </Tabs.TabPane>

          <Tabs.TabPane tab={<TabButton>Вакансии</TabButton>} key="2">
            <ProfileRow>
              <LeftCol span={19}>
                <Vacancies />
              </LeftCol>
              <RightCol span={5}>
                <SiderMenu />
              </RightCol>
            </ProfileRow>
          </Tabs.TabPane>

          <Tabs.TabPane tab={<TabButton>Резюме</TabButton>} key="3">
            <ProfileRow>
              <LeftCol span={19}>
                <Resumes />
              </LeftCol>
              <RightCol span={5}>
                <SiderMenu />
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
