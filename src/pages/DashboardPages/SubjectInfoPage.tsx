import React, { useEffect } from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCheckAuth } from '@app/store/slices/authSlice';
import ProfileInfo from '@app/components/dashboards/profile-info/ProfileInfo';
import SubjectInfo from '@app/components/dashboards/search-dashboard/SubjectInfo/SubjectInfo';

const SubjectInfoPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isNewDesign } = useAppSelector((state) => state.design);

  useEffect(() => {
    dispatch(doCheckAuth());
  }, [dispatch]);

  const desktopLayout = (
    <Row>
      <S.LeftSideCol>
        {isNewDesign ? <ProfileInfo /> : <SubjectInfo />}
        <References />
      </S.LeftSideCol>
    </Row>
  );

  // const mobileAndTabletLayout = <Row gutter={[20, 20]}></Row>;

  return (
    <>
      <PageTitle>{t('common.subject-info')}</PageTitle>
      {desktopLayout}
    </>
  );
};

export default SubjectInfoPage;
