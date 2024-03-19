import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { WithChildrenProps } from '@app/types/generalTypes';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);
  console.log(token);
  return token !== null ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/auth/login" replace />
    </>
  );
};

export default RequireAuth;
