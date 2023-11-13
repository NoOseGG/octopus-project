import React from 'react';
import { GiasPlan } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import styled from 'styled-components';

type MyComponentProps = {
  giasPlan: GiasPlan;
};

const SingleGiasPlan: React.FC<MyComponentProps> = ({ giasPlan }) => {
  return (
    <Container>
      <Column>
        <DataField name="Дата и время размещения в ГИАС" content={giasPlan.from_dttm} />
        <DataField name="Версия плана" content={giasPlan.plan_version} />
        <DataField
          name="Идентификационный номер годового плана государственных закупок"
          content={giasPlan.identification_number}
        />
        <DataField name="Год плана" content={giasPlan.plan_year} />
        <DataField name="Номер пункта плана" content={giasPlan.public_number} />
        <DataField name="Наименование однородных товаров (работ, услуг)" content={giasPlan.goods_name} />
        <DataField name="Код ОКРБ 007-2012" content={giasPlan.okrb_0072012_code} />
        <DataField
          name="Наименование подвида товаров (работ, услуг) в соответствии с ОКРБ 007-2012"
          content={giasPlan.okrb_0072012_name}
        />
        <DataField name="Код ОКРБ 008-1995" content={giasPlan.okrb_0081995_code} />
        <DataField
          name="Наименование единиц измерения в соответствии с ОКРБ 008-1995"
          content={giasPlan.okrb_0081995_name}
        />
        <DataField name="Предмет государственной закупки" content={giasPlan.subject_purchase} />
        <DataField name="Количество" content={giasPlan.approximate_value} />
        <DataField name="Является или нет заказчиком" content={giasPlan.is_organizer} />
        <DataField
          name="УНП бюджетной организации для которой производится закупка"
          content={giasPlan.legal_entity_id_budget}
        />
        <DataField name="Срок (периодичность) проведения процедуры" content={giasPlan.procedure_months} />
        <DataField name="Оплата со счетов казначейства эквивалент в USD" content={giasPlan.budget_cost_usd} />
        <DataField name="Оплата со счетов заказчика" content={giasPlan.fund_cost} />
        <DataField name="Оплата со счетов заказчика эквивалент USD" content={giasPlan.fund_cost_usd} />
        <DataField name="Собственные средства" content={giasPlan.inner_cost} />
        <DataField name="Собственные средства эквивалент USD" content={giasPlan.inner_cost_usd} />
        <DataField name="Год финансирования" content={giasPlan.fin_year} />
      </Column>
      <Column>
        <DataField name="Код раздела" content={giasPlan.dsct} />
        <DataField name="Код подраздела" content={giasPlan.dssct} />
        <DataField name="Код вида" content={giasPlan.dknd} />
        <DataField name="Код параграфа" content={giasPlan.dprgr} />
        <DataField name="Код главы" content={giasPlan.chp} />
        <DataField name="Код программы" content={giasPlan.dpro} />
        <DataField name="Код подпрограммы" content={giasPlan.dspro} />
        <DataField name="Код категории" content={giasPlan.dctg} />
        <DataField name="Код статьи" content={giasPlan.dart} />
        <DataField name="Код подстатьи" content={giasPlan.dsart} />
        <DataField name="Код элемента" content={giasPlan.ditm} />
        <DataField name="Код бюджета" content={giasPlan.finid} />
        <DataField name="УНК заказчика" content={giasPlan.unk} />
        <DataField name="Код ТК" content={giasPlan.tkid} />
        <DataField
          name="Наименование государственного органа (организации), в подчинении (состав, систему) которого находится (входит) заказчик либо которому переданы в управление его акции (доли в уставном фонде), находящиеся в государственной собственности"
          content={giasPlan.name_state_organization}
        />
      </Column>
    </Container>
  );
};

export default SingleGiasPlan;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Column = styled.div`
  width: 100%;
`;
