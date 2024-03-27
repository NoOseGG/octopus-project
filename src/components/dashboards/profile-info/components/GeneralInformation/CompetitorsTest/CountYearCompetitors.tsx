import React, { useEffect } from 'react';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCountYearsCompetitors } from '@app/store/slices/profileInfo/competitors/countYearCompetitors';

type MyComponentsProps = {
  settlement: string | null;
  typeActivity: string | null;
};

const CountYearCompetitors: React.FC<MyComponentsProps> = ({ settlement, typeActivity }) => {
  const dispatch = useAppDispatch();
  const { count, isLoading } = useAppSelector((state) => state.competitors.countYearCompetitors);
  const mySettlement = settlement ? settlement : '';
  const myTypeActivity = typeActivity ? typeActivity : '';

  useEffect(() => {
    if (Boolean(mySettlement.length) && Boolean(myTypeActivity.length))
      dispatch(doCountYearsCompetitors({ settlement: mySettlement, typeActivity: myTypeActivity }));
  }, [dispatch, mySettlement, myTypeActivity]);

  return (
    <Block>
      <Title>Количество созданных за год</Title>
      <Content>{count}</Content>
    </Block>
  );
};

export default CountYearCompetitors;
