import React, { useState } from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { GiasPlan } from '@app/store/types/Subject';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';

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
    <GiasPlanContainer>
      <Title>
        <TitleName>{giasPlan.goods_name}</TitleName>{' '}
        <TitleFromDttm>{`от ${formatDate(giasPlan.from_dttm)}`}</TitleFromDttm>
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLine name={'Версия плана'} field={giasPlan.plan_version} />
          <TableLine
            name={'Идентификационный номер годового плана государственных закупок'}
            field={giasPlan.identification_number}
          />
          <TableLine name={'Наименование однородных товаров (работ, услуг)'} field={giasPlan.goods_name} />
          {isCollapsed && (
            <>
              <TableLine name={'Год плана'} field={giasPlan.plan_year} />
              <TableLine name={'Номер пункта плана'} field={giasPlan.public_number} />
              <TableLine name={'Код ОКРБ 007-2012'} field={giasPlan.okrb_0072012_code} />
              <TableLine
                name={'Наименование подвида товаров (работ, услуг) в соответствии с ОКРБ 007-2012'}
                field={giasPlan.okrb_0072012_name}
              />
              <TableLine name={'Код ОКРБ 008-1995'} field={giasPlan.okrb_0081995_code} />
              <TableLine
                name={'Наименование единиц измерения в соответствии с ОКРБ 008-1995'}
                field={giasPlan.okrb_0081995_name}
              />
              <TableLine name={'Предмет государственной закупки'} field={giasPlan.subject_purchase} />
              <TableLine name={'Количество'} field={giasPlan.approximate_value} />
              <TableLine name={'Является или нет заказчиком'} field={giasPlan.is_organizer ? 'Да' : 'Нет'} />
              <TableLine
                name={'УНП бюджетной организации для которой производится закупка'}
                field={giasPlan.legal_entity_id_budget}
              />
              <TableLine name={'Срок (периодичность) проведения процедуры'} field={giasPlan.procedure_months} />
              <TableLine name={'Оплата со счетов казначейства'} field={giasPlan.budget_cost} />
              <TableLine name={'Оплата со счетов казначейства эквивалент в USD'} field={giasPlan.budget_cost_usd} />
              <TableLine name={'Оплата со счетов заказчика'} field={giasPlan.fund_cost} />
              <TableLine name={'Оплата со счетов заказчика эквивалент USD'} field={giasPlan.fund_cost_usd} />
              <TableLine name={'Собственные средства'} field={giasPlan.inner_cost} />
              <TableLine name={'Собственные средства эквивалент USD'} field={giasPlan.inner_cost_usd} />
              <TableLine name={'Год финансирования'} field={giasPlan.fin_year} />
              <TableLine name={'Код раздела'} field={giasPlan.dsct} />
              <TableLine name={'Код подраздела'} field={giasPlan.dssct} />
              <TableLine name={'Код вида'} field={giasPlan.dknd} />
              <TableLine name={'Код параграфа'} field={giasPlan.dprgr} />
              <TableLine name={'Код главы'} field={giasPlan.chp} />
              <TableLine name={'Код программы'} field={giasPlan.dpro} />
              <TableLine name={'Код подпрограммы'} field={giasPlan.dspro} />
              <TableLine name={'Код категории'} field={giasPlan.dctg} />
              <TableLine name={'Код статьи'} field={giasPlan.dart} />
              <TableLine name={'Код подстатьи'} field={giasPlan.dsart} />
              <TableLine name={'Код элемента'} field={giasPlan.ditm} />
              <TableLine name={'Код бюджета'} field={giasPlan.finid} />
              <TableLine name={'Код ТК'} field={giasPlan.tkid} />
              <TableLine
                name={
                  'Наименование государственного органа (организации), в подчинении (состав, систему) которого находится (входит) заказчик либо которому переданы в управление его акции (доли в уставном фонде), находящиеся в государственной собственности'
                }
                field={giasPlan.name_state_organization}
              />
            </>
          )}
        </tbody>
      </S.StyledTable>
      <span onClick={() => handleClick()}>
        <ButtonShow>{isCollapsed ? <>{textCollapseButton}</> : <>{textCollapseButton}</>}</ButtonShow>
        <br />
      </span>
    </GiasPlanContainer>
  );
};

export default MyGiasPlan;

const GiasPlanContainer = styled.div``;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
`;

const TitleName = styled.span`
  color: blue;
`;

const TitleFromDttm = styled.span`
  color: grey;
`;
