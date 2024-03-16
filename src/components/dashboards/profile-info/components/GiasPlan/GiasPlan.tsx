import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import MyGiasPlan from '@app/components/dashboards/profile-info/components/GiasPlan/components/MyGiasPlan/MyGiasPlan';
import CountGiasPlan from '@app/components/dashboards/profile-info/components/GiasPlan/components/CountGiasPlan/CountGiasPlan';

const GiasPlan: React.FC = () => {
  const gias_plan = useAppSelector((state) => state.searchProfile.profile.gias_plan);

  return (
    <>
      {Boolean(gias_plan.length) && (
        <>
          <CountGiasPlan count={gias_plan.length} />
          <GiasPlanContainer>
            {gias_plan.map((item, index) => (
              <MyGiasPlan giasPlan={item} key={index} />
            ))}
          </GiasPlanContainer>
        </>
      )}
    </>
  );
};

export default GiasPlan;

const GiasPlanContainer = styled.div`
  margin-top: 20px;
`;
