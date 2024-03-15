import React, { useState } from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { GiasPlan } from '@app/store/types/Subject';
import styled from 'styled-components';

const COLLAPSE_OPEN = 'Скрыть данные';
const COLLAPSE_CLOSE = 'Показать данные';

type MyComponentProps = {
  giasPlan: GiasPlan;
};

const MyGiasPlan: React.FC<MyComponentProps> = ({ giasPlan }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  return (
    <GiasPlan>
      <S.StyledTable>
        <tbody>
          <TableLine name={'дата публикации вакансии'} field={giasPlan.from_dttm} isDate={true} />
          <TableLine name={'Версия плана'} field={giasPlan.plan_version} />
          <TableLine
            name={'Идентификационный номер годового плана государственных закупок'}
            field={giasPlan.identification_number}
          />
          {isCollapsed && (
            <>
              <TableLine name={'Год плана'} field={giasPlan.plan_year} />
            </>
          )}
        </tbody>
      </S.StyledTable>
      <span onClick={() => handleClick()}>
        <ButtonShow>{isCollapsed ? <>{textCollapseButton}</> : <>{textCollapseButton}</>}</ButtonShow>
      </span>
    </GiasPlan>
  );
};

export default MyGiasPlan;

const GiasPlan = styled.div``;
