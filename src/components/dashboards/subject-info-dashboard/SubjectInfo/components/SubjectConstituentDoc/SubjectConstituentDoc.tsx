import React from 'react';
import { ConstituentDoc } from '@app/store/types/Subject';
import { Card } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  constituent_doc: ConstituentDoc[];
};

const SubjectConstituentDoc: React.FC<MyComponentProps> = ({ constituent_doc }) => {
  return (
    <Card title="Сведения об изменениях, внесенных в учредительный документ" style={{ width: '100%' }}>
      {constituent_doc[0].event_name && <DataField name="Название события" content={constituent_doc[0].event_name} />}
      {constituent_doc[0].from_dttm && <DataField name="Дата события" content={constituent_doc[0].from_dttm} />}
      {constituent_doc[0].to_dttm && <DataField name="Дата отмены события" content={constituent_doc[0].to_dttm} />}
      {constituent_doc[0].doc_dttm && <DataField name="Дата подачи документов" content={constituent_doc[0].doc_dttm} />}
      {constituent_doc[0].doc_num && <DataField name="Номер документа" content={constituent_doc[0].doc_num} />}
      {constituent_doc[0].state_body_decision && (
        <DataField name="Орган, принявший решение" content={constituent_doc[0].state_body_decision} />
      )}
      {constituent_doc[0].state_body && (
        <DataField name="Государственный орган" content={constituent_doc[0].state_body} />
      )}
      {constituent_doc[0].reason && <DataField name="Основание" content={constituent_doc[0].reason} />}
      {constituent_doc[0].addition && (
        <DataField name="Дополнительная информация" content={constituent_doc[0].addition} />
      )}
      {constituent_doc[0].term_decision && (
        <DataField
          name="Срок (для ликвидации и т.п. в зависимости от события)"
          content={constituent_doc[0].term_decision}
        />
      )}
      {constituent_doc[0].decision_num && <DataField name="Номер решения" content={constituent_doc[0].decision_num} />}
    </Card>
  );
};

export default SubjectConstituentDoc;
