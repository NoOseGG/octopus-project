import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from './ActivateEmailForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doActivationEmail } from '@app/store/slices/authSlice';
import { notificationController } from '@app/controllers/notificationController';

export const ActivateEmailForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, token } = useParams<{ id: string; token: string }>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (id && token) {
      dispatch(
        doActivationEmail({
          uid: id,
          token,
        }),
      )
        .unwrap()
        .then(() => {
          notificationController.success({
            message: 'Электронная почта активирована',
          });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id, token]);

  const handleSubmit = () => {
    navigate('/auth/login');
  };

  const handleClickHomeButton = () => {
    navigate('/');
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <Auth.FormTitle>Электронный адрес подтвержден</Auth.FormTitle>
        <S.Description>Вы можете авторизироваться или вернутся на главну страницу.</S.Description>
        <BaseForm.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            Авторизироваться
          </S.SubmitButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.HomeButton onClick={handleClickHomeButton}>{t('common.toHome')}</Auth.HomeButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
