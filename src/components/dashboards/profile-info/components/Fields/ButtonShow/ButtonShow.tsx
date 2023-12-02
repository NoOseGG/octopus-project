import React from 'react';
import { ButtonShowStyle } from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

const ButtonShow: React.FC = ({ children }) => {
  return <ButtonShowStyle>{children}</ButtonShowStyle>;
};

export default ButtonShow;
