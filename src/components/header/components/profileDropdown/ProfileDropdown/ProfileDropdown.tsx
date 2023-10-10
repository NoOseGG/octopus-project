import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <Dropdown overlay={<ProfileOverlay />} trigger={['click']}>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
        <Col>
          <Avatar src={user.avatar} alt="User" shape="circle" size={40} />
        </Col>
      </S.ProfileDropdownHeader>
    </Dropdown>
  ) : null;
};
