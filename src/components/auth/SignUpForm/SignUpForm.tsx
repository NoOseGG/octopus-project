import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doSignUp } from '@app/store/slices/authSlice';
import { notificationController } from '@app/controllers/notificationController';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import * as S from './SignUpForm.styles';
import { dateTransformForRegistration } from '@app/utils/utils';
import locale from '../../dashboards/dashboard/components/SearchFilters/components/DateFilter/locale/ru_RU';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  patronymic: string;
  birthdate: string;
  phone_number: string;
  email: string;
  password: string;
}

const initValues = {
  first_name: 'Мобилкин',
  last_name: 'Мобилкин',
  patronymic: 'Мобилкин',
  birthdate: '',
  phone_number: '+375259586429',
  email: 'noose1992@yandex.ru',
  password: 'privet1992poka',
  confirmPassword: 'privet1992poka',
  termOfUse: true,
};

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const { t } = useTranslation();

  const handleSubmit = (values: SignUpFormData) => {
    setLoading(true);

    const newValues = JSON.parse(JSON.stringify(values));
    newValues.birthdate = dateTransformForRegistration(values.birthdate);
    delete newValues.confirmPassword;

    if (!newValues.termOfUse) {
      notificationController.warning({
        message: 'Примите соглашения при регистрации!',
      });
      setLoading(false);
      return;
    }

    delete newValues.termOfUse;

    dispatch(doSignUp(newValues))
      .unwrap()
      .then(() => {
        notificationController.success({
          message: t('auth.signUpSuccessMessage'),
          description: t('auth.signUpSuccessDescription'),
        });
        navigate('/auth/login');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleClickHomeButton = () => {
    navigate('/');
  };

  return (
    <Auth.RegisterFormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <S.Title>{t('common.signUpTitle')}</S.Title>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <Auth.FormItem
              name="last_name"
              label={t('common.lastName')}
              rules={[{ required: true, message: t('common.requiredField') }]}
            >
              <Auth.FormInput placeholder={t('common.lastName')} />
            </Auth.FormItem>
            <Auth.FormItem
              name="first_name"
              label={t('common.firstName')}
              rules={[{ required: true, message: t('common.requiredField') }]}
            >
              <Auth.FormInput placeholder={t('common.firstName')} />
            </Auth.FormItem>
            <Auth.FormItem
              name="patronymic"
              label={t('common.patronymic')}
              rules={[{ required: true, message: t('common.requiredField') }]}
            >
              <Auth.FormInput placeholder={t('common.patronymic')} />
            </Auth.FormItem>
            <Auth.FormItem
              name="birthdate"
              label={t('common.birthdate')}
              rules={[{ required: true, message: t('common.requiredField') }]}
            >
              <Auth.StyledDatePicker locale={locale} />
            </Auth.FormItem>
          </div>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <Auth.FormItem
              name="phone_number"
              label={t('common.phone')}
              rules={[{ required: true, message: t('common.requiredField') }]}
            >
              <Auth.FormInput placeholder={t('common.phone')} />
            </Auth.FormItem>
            <Auth.FormItem
              name="email"
              label={t('common.email')}
              rules={[
                { required: true, message: t('common.requiredField') },
                {
                  type: 'email',
                  message: t('common.notValidEmail'),
                },
              ]}
            >
              <Auth.FormInput placeholder={t('common.email')} />
            </Auth.FormItem>
            <Auth.FormItem
              label={t('common.password')}
              name="password"
              rules={[{ required: true, message: t('common.requiredField') }]}
            >
              <Auth.FormInputPassword placeholder={t('common.password')} />
            </Auth.FormItem>
            <Auth.FormItem
              label={t('common.confirmPassword')}
              name="confirmPassword"
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
            >
              <Auth.FormInputPassword placeholder={t('common.confirmPassword')} />
            </Auth.FormItem>
          </div>
        </div>

        <Auth.ActionsWrapper>
          <BaseForm.Item name="termOfUse" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <Auth.Text>
                {t('signup.agree')}{' '}
                <Link to="/" target={'_blank'}>
                  <Auth.LinkText>{t('signup.personalDataPolicy')}</Auth.LinkText>
                </Link>{' '}
                {t('signup.and')}{' '}
                <Link to="/" target={'_blank'}>
                  <Auth.LinkText>{t('signup.publicAgreement')}</Auth.LinkText>
                </Link>
                {t('signup.dot')}
              </Auth.Text>
            </Auth.FormCheckbox>
          </BaseForm.Item>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.signUp')}
          </Auth.SubmitButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.HomeButton onClick={handleClickHomeButton}>{t('common.toHome')}</Auth.HomeButton>
        </BaseForm.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('signup.alreadyHaveAccount')}{' '}
            <Link to="/auth/login">
              <Auth.LinkText>{t('common.here')}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.RegisterFormWrapper>
  );
};
