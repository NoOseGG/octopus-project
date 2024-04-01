import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import LineText from '@app/components/dashboards/profile-info/components/components/Lines/LineText';

const OtherRelevantInformation: React.FC = () => {
  const legal_forms = useAppSelector((state) => state.searchProfile.profile.legal_forms);
  const countries = useAppSelector((state) => state.searchProfile.profile.countries);

  return (
    <>
      <>
        <S.Title>Иная значимая информация</S.Title>
        <S.Container>
          <LineText name={'Тип организации'} content={legal_forms[0]?.form_type} />
          <LineText name={'Форма собственности'} content={legal_forms[0]?.name} />
          {/*<TableLineTooltip*/}
          {/*  name={'Наименование'}*/}
          {/*  field={legal_forms[0]?.name}*/}
          {/*  description={legal_forms[0]?.description}*/}
          {/*/>*/}
          <LineText name={'Страна регистрации'} content={countries[0]?.name} />
          <S.MyDivider />
        </S.Container>
      </>
    </>
  );
};

export default OtherRelevantInformation;
