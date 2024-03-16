import React, { Fragment } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const EconomicHighRiskRegistry: React.FC = () => {
  const economic_high_risk_registry = useAppSelector(
    (state) => state.searchProfile.profile.economic_high_risk_registry,
  );

  return (
    <>
      {Boolean(economic_high_risk_registry.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>
                  Сведения о включении в перечень повышенного риска правонарушений в экономической сфере
                </S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            {economic_high_risk_registry.map((item, index) => (
              <Fragment key={index}>
                <TableLine name={'Основание для включения в реестр'} field={item.reason} />
                <TableLine name={'Дата включения'} field={item.from_dttm} isDate={true} />
                <TableLine name={'Дата составления заключения ДФР'} field={item.date_fiu} isDate={true} />
                <TableLine
                  name={
                    'Период, определенный в заключении ДФР, в течение которого оформленные первичные учетные документы для целей налогообложения не имеют юридической силы'
                  }
                  field={item.period_no_legal_force}
                />
              </Fragment>
            ))}
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default EconomicHighRiskRegistry;
