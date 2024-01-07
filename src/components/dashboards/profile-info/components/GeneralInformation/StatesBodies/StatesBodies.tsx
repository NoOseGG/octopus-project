import React, { Fragment } from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const StatesBodies: React.FC = () => {
  const states_bodies = useAppSelector((state) => state.searchProfile.profile.states_bodies);
  console.log(states_bodies);
  return (
    <>
      {Boolean(states_bodies.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Данные о государственных органах</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            {states_bodies.map((item, index) => (
              <Fragment key={index}>
                <TableLine name={getStatusByCode(item.status)} field={item.full_name} />
                <TableLine name={'Дата начала действия'} field={item.from_dttm} isDate={true} />
                {index !== states_bodies.length - 1 && <br />}
              </Fragment>
            ))}
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default StatesBodies;

const getStatusByCode = (code: string | null): string | null => {
  if (code === null) return null;
  switch (code) {
    case 'LVK':
      return 'Орган принявший решение о ликвидации';
    case 'CUR':
      return 'Текущий орган учета';
    case 'CRT':
      return 'Орган принявший решение о создании';
    default:
      return '';
  }
};
