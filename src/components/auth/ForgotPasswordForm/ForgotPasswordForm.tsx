import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from './ForgotPasswordForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doResetPassword } from '@app/store/slices/authSlice';
import { notificationController } from '@app/controllers/notificationController';

interface ForgotPasswordFormData {
  email: string;
}

const initValues = {
  email: '',
};

export const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: ForgotPasswordFormData) => {
    console.log(JSON.stringify(values));
    setLoading(true);
    dispatch(doResetPassword(values))
      .unwrap()
      .then(() => {
        notificationController.warning({
          message: 'Письмо с сбросом пароля отправлено на указанный электронный адрес.',
        });
        // navigate('/auth/security-code');
        setLoading(false);
      })
      .catch((err) => {
        notificationController.error({ message: err.message });
        setLoading(false);
      });
  };

  const handleClickHomeButton = () => {
    navigate('/');
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <Auth.FormTitle>{t('common.resetPassword')}</Auth.FormTitle>
        <S.Description>{t('forgotPassword.description')}</S.Description>
        <Auth.FormItem
          name="email"
          label={t('common.email')}
          rules={[{ required: true, message: t('common.emailError') }]}
        >
          <Auth.FormInput placeholder={t('common.emailPlaceHolder')} />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('forgotPassword.resetPassword')}
          </S.SubmitButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.HomeButton onClick={handleClickHomeButton}>{t('common.toHome')}</Auth.HomeButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
