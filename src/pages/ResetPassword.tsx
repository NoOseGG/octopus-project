import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { NewPasswordForm } from '@app/components/auth/NewPasswordForm/NewPasswordForm';

const ForgotPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.forgotPass')}</PageTitle>
      <NewPasswordForm />
    </>
  );
};

export default ForgotPasswordPage;
