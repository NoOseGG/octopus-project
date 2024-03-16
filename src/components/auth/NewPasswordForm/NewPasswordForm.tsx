import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doSetNewPasswordAfterReset } from '@app/store/slices/authSlice';
import * as S from './NewPasswordForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';

interface NewPasswordFormData {
  password: string;
  confirmPassword: string;
}

const initStates = {
  password: '',
  confirmPassword: '',
};

export const NewPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);
  const { id, token } = useParams<{ id: string; token: string }>();

  const handleSubmit = (values: NewPasswordFormData) => {
    if (values.password.length < 8) {
      notificationController.error({ message: 'Пароль слишком короткий' });
      setLoading(false);
      return;
    }
    if (id !== undefined && token !== undefined) {
      console.log(JSON.stringify(values));
      setLoading(true);
      dispatch(
        doSetNewPasswordAfterReset({
          uid: id,
          token: token,
          new_password: values.password,
        }),
      )
        .unwrap()
        .then(() => {
          navigate('/auth/login');
          notificationController.success({
            message: t('newPassword.successMessage'),
            description: t('newPassword.successDescription'),
          });
        })
        .catch((err) => {
          notificationController.error({ message: err.message });
          setLoading(false);
        });
    }
  };

  const handleClickHomeButton = () => {
    navigate('/');
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initStates}>
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <Auth.FormTitle>{t('newPassword.title')}</Auth.FormTitle>
        <S.Description>{t('newPassword.description')}</S.Description>
        <Auth.FormItem
          name="password"
          label={t('common.password')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <Auth.FormInputPassword placeholder={t('common.password')} />
        </Auth.FormItem>
        <Auth.FormItem
          name="confirmPassword"
          label={t('common.confirmPassword')}
          dependencies={['password']}
          rules={[
            { required: true, message: t('common.requiredField') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('common.confirmPasswordError')));
              },
            }),
          ]}
          hasFeedback
        >
          <Auth.FormInputPassword placeholder={t('common.confirmPassword')} />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.resetPassword')}
          </S.SubmitButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.HomeButton onClick={handleClickHomeButton}>{t('common.toHome')}</Auth.HomeButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
