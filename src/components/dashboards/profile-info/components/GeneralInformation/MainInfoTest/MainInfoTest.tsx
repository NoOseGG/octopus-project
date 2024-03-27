import React, { useMemo } from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { formatDate } from '@app/utils/utils';
import { Address } from '@app/store/types/Subject';
import LineText from '@app/components/dashboards/profile-info/components/components/Lines/LineText';
import LineTextCollapsed from '@app/components/dashboards/profile-info/components/components/Lines/LineTextCollapsed';

const MainInfoTest: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const names = useAppSelector((state) => state.searchProfile.profile.names);
  const status = useAppSelector((state) => state.searchProfile.profile.statuses);
  const dateRegEGR = useAppSelector((state) => state.searchProfile.profile.date_reg_egr);
  const age_full = useAppSelector((state) => state.searchProfile.profile.age_short);
  const taxOffices = useAppSelector((state) => state.searchProfile.profile.tax_offices);
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const typeActivities = useAppSelector((state) => state.searchProfile.profile.types_activities);
  const states_bodies = useAppSelector((state) => state.searchProfile.profile.states_bodies);
  const dateRegNMS = useAppSelector((state) => state.searchProfile.profile.date_reg_mns);
  const decision_create_number = useAppSelector((state) => state.searchProfile.profile.decision_create_number);
  const decision_liquidation_number = useAppSelector(
    (state) => state.searchProfile.profile.decision_liquidation_number,
  );

  const taxOffice = `${taxOffices[0]?.name} (c ${formatDate(taxOffices[0]?.from_dttm)})`;
  const stateBody = `${states_bodies[0]?.full_name} (c ${formatDate(
    states_bodies[0]?.from_dttm,
  )}) (решение №${decision_create_number})`;

  const age = useMemo(() => {
    if (age_full !== null && Number(age_full) <= 1) return 'Меньше года';
    else return age_full;
  }, [age_full]);

  const newFullAddresses = addresses
    ?.map((item) => {
      const date = `(с ${formatDate(item.from_dttm)})`;
      return `${getFullAddress(item)} ${date}`;
    })
    .filter((full_name) => full_name !== null) as string[];

  const newTypeActivities = typeActivities?.map((item) => {
    return `${item?.name} (${item?.code})`;
  });

  return (
    <S.Container>
      <S.Title>Регистрационные данные</S.Title>
      <S.ContainerLineText>
        <LineText name={'УНП'} content={unn} isCopyable={true} />
        <LineText name={'Сокращенное наименование'} content={names[0]?.short_name} isCopyable={true} />
        <LineTextCollapsed
          name={'Полное наименование'}
          contents={
            names
              ?.map((item) => {
                const date = `(с ${formatDate(item.from_dttm)})`;
                return `${item.full_name} ${date}`;
              })
              .filter((full_name) => full_name !== null) as string[]
          }
          isCopyable={true}
          isColor={true}
        />
        <LineTextCollapsed
          name={'Юридический адрес'}
          contents={newFullAddresses}
          isCopyable={true}
          isMap={true}
          isColor={true}
        />
        <LineTextCollapsed name={'Вид деятельности'} contents={newTypeActivities} />
        <LineText name={'Дата регистрации в ЕГР'} content={dateRegEGR} isDate={true} />
        <LineText name={'Продолжительность деятельности'} content={getYearString(age)} />
        <LineText
          name={'Статус'}
          content={
            status[0]?.name === 'Действующий'
              ? status[0]?.name
              : `${status[0]?.name} (${formatDate(status[0]?.from_dttm)})`
          }
        />
        <LineText name={'Регистрирующий орган'} content={stateBody} />
        <LineText name={'Налоговый учет'} content={taxOffice} />
      </S.ContainerLineText>
    </S.Container>
  );
};

export default MainInfoTest;

const getFullAddress = (address: Address): string | null => {
  let result = '';
  if (address?.region !== null) result += address?.region + ', ';
  if (address?.full_address !== null) result += address?.full_address + ' ';
  if (address?.building_type !== null) result += `(${address?.building_type})`;

  return Boolean(result) ? result : null;
};

const getYearString = (year: string | null): string | null => {
  if (year === null) return null;

  const numericYear = parseInt(year);
  if (numericYear === 0) {
    return 'Меньше года';
  } else if (numericYear === 1 || (numericYear % 10 === 1 && numericYear % 100 !== 11)) {
    return year + ' год';
  } else if (
    (numericYear >= 2 && numericYear <= 4) ||
    (numericYear % 10 >= 2 && numericYear % 10 <= 4 && (numericYear % 100 < 10 || numericYear % 100 >= 20))
  ) {
    return year + ' года';
  } else {
    return year + ' лет';
  }
};
