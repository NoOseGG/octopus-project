import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './ProfileOverlay.styles';
import { DropdownMenu } from '@app/components/header/Header.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <DropdownMenu selectable={false} {...props}>
      <S.MenuItem key={0}>
        <Link to="/profile">
          <S.Text>{t('profile.title')}</S.Text>
        </Link>
      </S.MenuItem>
      <S.ItemsDivider />
      <S.MenuItem key={1}>
        <Link to="/logout">
          <S.Text>{t('header.logout')}</S.Text>
        </Link>
      </S.MenuItem>
    </DropdownMenu>
  );
};
