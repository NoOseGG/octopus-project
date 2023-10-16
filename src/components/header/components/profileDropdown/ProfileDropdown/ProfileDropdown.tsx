import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from './ProfileDropdown.styles';

export const ProfileDropdown: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <Dropdown overlay={<ProfileOverlay />} trigger={['click']}>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
        <Col>
          <Avatar
            src="https://sneg.top/uploads/posts/2023-06/1687659465_sneg-top-p-avatarka-dlya-gitkhaba-krasivo-43.jpg"
            alt="User"
            shape="circle"
            size={40}
          />
        </Col>
      </S.ProfileDropdownHeader>
    </Dropdown>
  ) : null;
};
