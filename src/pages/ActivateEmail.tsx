import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { ActivateEmailForm } from '@app/components/auth/ActivateEmailForm/ActivateEmailForm';

const ActivateEmailPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.emailActivate')}</PageTitle>
      <ActivateEmailForm />
    </>
  );
};

export default ActivateEmailPage;
