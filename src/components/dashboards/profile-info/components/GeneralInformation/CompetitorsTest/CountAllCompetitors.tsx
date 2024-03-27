import React, { useEffect } from 'react';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCountAllCompetitors } from '@app/store/slices/profileInfo/competitors/countAllCompetitors';

type MyComponentsProps = {
  settlement: string | null;
  typeActivity: string | null;
};

const CountAllCompetitors: React.FC<MyComponentsProps> = ({ settlement, typeActivity }) => {
  const dispatch = useAppDispatch();
  const { count, isLoading } = useAppSelector((state) => state.competitors.countAllCompetitors);
  const mySettlement = settlement ? settlement : '';
  const myTypeActivity = typeActivity ? typeActivity : '';

  useEffect(() => {
    if (Boolean(mySettlement.length) && Boolean(myTypeActivity.length))
      dispatch(doCountAllCompetitors({ settlement: mySettlement, typeActivity: myTypeActivity }));
  }, [dispatch, mySettlement, myTypeActivity]);

  return (
    <Block>
      <Title>Количество созданных</Title>
      <Content>{count}</Content>
    </Block>
  );
};

export default CountAllCompetitors;
