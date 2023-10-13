import React from 'react';
import { Card } from 'antd';
import { GiasPlan } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  giasPlan: GiasPlan[];
};

const SubjectGiasAccreditedCustomer: React.FC<MyComponentProps> = ({ giasPlan }) => {
  return (
    <Card title="Реестр ГИАС планы закупок" style={{ width: '100%' }}>
      {giasPlan[0].from_dttm && <DataField name="Дата и время размещения в ГИАС" content={giasPlan[0].from_dttm} />}
      {giasPlan[0].plan_version && <DataField name="Версия плана" content={giasPlan[0].plan_version} />}
      {giasPlan[0].identification_number && (
        <DataField
          name="Идентификационный номер годового плана государственных закупок"
          content={giasPlan[0].identification_number}
        />
      )}
      {giasPlan[0].plan_year && <DataField name="Год плана" content={giasPlan[0].plan_year} />}
      {giasPlan[0].public_number && <DataField name="Номер пункта плана" content={giasPlan[0].public_number} />}
      {giasPlan[0].goods_name && (
        <DataField name="Наименование однородных товаров (работ, услуг)" content={giasPlan[0].goods_name} />
      )}
      {giasPlan[0].okrb_0072012_code && <DataField name="Код ОКРБ 007-2012" content={giasPlan[0].okrb_0072012_code} />}
      {giasPlan[0].okrb_0072012_name && (
        <DataField
          name="Наименование подвида товаров (работ, услуг) в соответствии с ОКРБ 007-2012"
          content={giasPlan[0].okrb_0072012_name}
        />
      )}
      {giasPlan[0].okrb_0081995_code && <DataField name="Код ОКРБ 008-1995" content={giasPlan[0].okrb_0081995_code} />}
      {giasPlan[0].okrb_0081995_name && (
        <DataField
          name="Наименование единиц измерения в соответствии с ОКРБ 008-1995"
          content={giasPlan[0].okrb_0081995_name}
        />
      )}
      {giasPlan[0].subject_purchase && (
        <DataField name="Предмет государственной закупки" content={giasPlan[0].subject_purchase} />
      )}
      {giasPlan[0].approximate_value && <DataField name="Количество" content={giasPlan[0].approximate_value} />}
      {giasPlan[0].is_organizer && <DataField name="Является или нет заказчиком" content={giasPlan[0].is_organizer} />}
      {giasPlan[0].legal_entity_id_budget && (
        <DataField
          name="УНП бюджетной организации для которой производится закупка"
          content={giasPlan[0].legal_entity_id_budget}
        />
      )}
      {giasPlan[0].procedure_months && (
        <DataField name="Срок (периодичность) проведения процедуры" content={giasPlan[0].procedure_months} />
      )}
      {giasPlan[0].budget_cost_usd && (
        <DataField name="Оплата со счетов казначейства эквивалент в USD" content={giasPlan[0].budget_cost_usd} />
      )}
      {giasPlan[0].fund_cost && <DataField name="Оплата со счетов заказчика" content={giasPlan[0].fund_cost} />}
      {giasPlan[0].fund_cost_usd && (
        <DataField name="Оплата со счетов заказчика эквивалент USD" content={giasPlan[0].fund_cost_usd} />
      )}
      {giasPlan[0].inner_cost && <DataField name="Собственные средства" content={giasPlan[0].inner_cost} />}
      {giasPlan[0].inner_cost_usd && (
        <DataField name="Собственные средства эквивалент USD" content={giasPlan[0].inner_cost_usd} />
      )}
      {giasPlan[0].fin_year && <DataField name="Год финансирования" content={giasPlan[0].fin_year} />}
      {giasPlan[0].dsct && <DataField name="Код раздела" content={giasPlan[0].dsct} />}
      {giasPlan[0].dssct && <DataField name="Код подраздела" content={giasPlan[0].dssct} />}
      {giasPlan[0].dknd && <DataField name="Код вида" content={giasPlan[0].dknd} />}
      {giasPlan[0].dprgr && <DataField name="Код параграфа" content={giasPlan[0].dprgr} />}
      {giasPlan[0].chp && <DataField name="Код главы" content={giasPlan[0].chp} />}
      {giasPlan[0].dpro && <DataField name="Код программы" content={giasPlan[0].dpro} />}
      {giasPlan[0].dspro && <DataField name="Код подпрограммы" content={giasPlan[0].dspro} />}
      {giasPlan[0].dctg && <DataField name="Код категории" content={giasPlan[0].dctg} />}
      {giasPlan[0].dart && <DataField name="Код статьи" content={giasPlan[0].dart} />}
      {giasPlan[0].dsart && <DataField name="Код подстатьи" content={giasPlan[0].dsart} />}
      {giasPlan[0].ditm && <DataField name="Код элемента" content={giasPlan[0].ditm} />}
      {giasPlan[0].finid && <DataField name="Код бюджета" content={giasPlan[0].finid} />}
      {giasPlan[0].unk && <DataField name="УНК заказчика" content={giasPlan[0].unk} />}
      {giasPlan[0].tkid && <DataField name="Код ТК" content={giasPlan[0].tkid} />}
      {giasPlan[0].name_state_organization && (
        <DataField
          name="Наименование государственного органа (организации), в подчинении (состав, систему) которого находится (входит) заказчик либо которому переданы в управление его акции (доли в уставном фонде), находящиеся в государственной собственности"
          content={giasPlan[0].name_state_organization}
        />
      )}
    </Card>
  );
};

export default SubjectGiasAccreditedCustomer;
