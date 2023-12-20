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
import Purchases from '@app/components/dashboards/profile-info/components/Purchases/Purchases';
import NewsProfile from '@app/components/dashboards/profile-info/components/NewsProfile/NewsProfile';

const LEFT_COLUMN_SIZE = 19;
const RIGHT_COLUMN_SIZE = 5;

enum TABS {
  GENERAL_INFORMATION = '1',
  VACANCIES = '2',
  RESUMES = '3',
  PURCHASES = '4',
  NEWS = '5',
}

const ProfileInfo: React.FC = () => {
  const { unn } = useParams();
  const { loading, error } = useAppSelector((state) => state.searchProfile);
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector((state) => state.searchProfile.profile.vacancy);
  const resumes = useAppSelector((state) => state.searchProfile.profile.resume);
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const iceTradeParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_participant);
  const iceTradeOtherParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_other_participant);
  const iceTradeOrganizer = useAppSelector((state) => state.searchProfile.profile.icetrade_organizer);
  const iceTradeOrganizerNegotiations = useAppSelector(
    (state) => state.searchProfile.profile.icetrade_organizer_negotiations,
  );
  const news = useAppSelector((state) => state.searchProfile.profile.news);
  const iceTradeLength =
    Boolean(iceTradeCustomer.length) ||
    Boolean(iceTradeParticipant.length) ||
    Boolean(iceTradeOtherParticipant.length) ||
    Boolean(iceTradeOrganizer.length) ||
    Boolean(iceTradeOrganizerNegotiations.length);

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
          <LeftCol span={LEFT_COLUMN_SIZE}>
            <Tabs defaultActiveKey={TABS.GENERAL_INFORMATION}>
              <Tabs.TabPane tab={<TabButton>Основная информация</TabButton>} key={TABS.GENERAL_INFORMATION}>
                <GeneralInformation />
              </Tabs.TabPane>
              {Boolean(vacancies.length) && (
                <Tabs.TabPane tab={<TabButton>Вакансии</TabButton>} key={TABS.VACANCIES}>
                  <Vacancies />
                </Tabs.TabPane>
              )}
              {Boolean(resumes.length) && (
                <Tabs.TabPane tab={<TabButton>Резюме</TabButton>} key={TABS.RESUMES}>
                  <Resumes />
                </Tabs.TabPane>
              )}
              {iceTradeLength && (
                <Tabs.TabPane tab={<TabButton>Закупки</TabButton>} key={TABS.PURCHASES}>
                  <Purchases />
                </Tabs.TabPane>
              )}
              {Boolean(news.length) && (
                <Tabs.TabPane tab={<TabButton>Новости</TabButton>} key={TABS.NEWS}>
                  <NewsProfile />
                </Tabs.TabPane>
              )}
            </Tabs>
          </LeftCol>
          <RightCol span={RIGHT_COLUMN_SIZE}>
            <SiderMenu />
          </RightCol>
        </ProfileRow>

        // <Tabs defaultActiveKey={TABS.GENERAL_INFORMATION}>
        //   <Tabs.TabPane tab={<TabButton>Основная информация</TabButton>} key={TABS.GENERAL_INFORMATION}>
        //     <ProfileRow>
        //       <LeftCol span={LEFT_COLUMN_SIZE}>
        //
        //       </LeftCol>
        //       <RightCol span={RIGHT_COLUMN_SIZE}>
        //         <SiderMenu />
        //       </RightCol>
        //     </ProfileRow>
        //   </Tabs.TabPane>
        //
        //   <Tabs.TabPane tab={<TabButton>Вакансии</TabButton>} key={TABS.VACANCIES}>
        //     <ProfileRow>
        //       <LeftCol span={LEFT_COLUMN_SIZE}>
        //         <Vacancies />
        //       </LeftCol>
        //       <RightCol span={RIGHT_COLUMN_SIZE}>
        //         <SiderMenu />
        //       </RightCol>
        //     </ProfileRow>
        //   </Tabs.TabPane>
        //
        //   <Tabs.TabPane tab={<TabButton>Резюме</TabButton>} key={TABS.RESUMES}>
        //     <ProfileRow>
        //       <LeftCol span={LEFT_COLUMN_SIZE}>
        //         <Resumes />
        //       </LeftCol>
        //       <RightCol span={RIGHT_COLUMN_SIZE}>
        //         <SiderMenu />
        //       </RightCol>
        //     </ProfileRow>
        //   </Tabs.TabPane>
        //
        //   <Tabs.TabPane tab={<TabButton>Закупки</TabButton>} key={TABS.PURCHASES}>
        //     <ProfileRow>
        //       <LeftCol span={LEFT_COLUMN_SIZE}>
        //         <Purchases />
        //       </LeftCol>
        //       <RightCol span={RIGHT_COLUMN_SIZE}>
        //         <SiderMenu />
        //       </RightCol>
        //     </ProfileRow>
        //   </Tabs.TabPane>
        // </Tabs>
      )}
    </ProfileContainer>
  );
};

export default ProfileInfo;

const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
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
