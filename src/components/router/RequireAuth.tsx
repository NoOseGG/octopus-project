import React from 'react';
import { WithChildrenProps } from '@app/types/generalTypes';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  return <>{children}</>;

  // return readToken() !== null ? (
  //   <>{children}</>
  // ) : (
  //   <>
  //     <Navigate to="/auth/login" replace />
  //   </>
  // );
};

export default RequireAuth;
