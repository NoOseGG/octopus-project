import React from 'react';
import { Navigate } from 'react-router-dom';
import { WithChildrenProps } from '@app/types/generalTypes';
import { useAppSelector } from '@app/hooks/reduxHooks';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);

  return token !== null ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/auth/login" replace />
    </>
  );
};

export default RequireAuth;
