import React from 'react';
import { TaxOffice, TaxOfficeArrea } from '@app/store/types/Subject';
import { Card, Typography } from 'antd';

type MyComponentProps = {
  taxOffices: TaxOffice[];
  taxOfficesArea: TaxOfficeArrea[];
};

const { Text } = Typography;

const SubjectTaxOffices: React.FC<MyComponentProps> = ({ taxOffices, taxOfficesArea }) => {
  return (
    <Card title="ИМНС" style={{ width: '100%' }}>
      {Boolean(taxOffices.length) && (
        <>
          <Text strong={true}>Данные о ИМНС: </Text> <Text>{taxOffices[0].name}</Text>
        </>
      )}
      <br />
      {Boolean(taxOfficesArea.length) && (
        <>
          <Text strong={true}>Данные о задолженностях ИМНС: </Text> <Text>{taxOfficesArea[0].name}</Text>
        </>
      )}
    </Card>
  );
};

export default SubjectTaxOffices;
