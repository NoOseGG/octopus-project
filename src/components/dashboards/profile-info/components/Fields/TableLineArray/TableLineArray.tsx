import React, { useState } from 'react';
import TableLine from '@app/components/dashboards/profile-info/components/Fields/TableLine/TableLine';

const COUNT_VISIBLE_ITEMS = 4;

type MyComponentProps = {
  name: string | null | undefined;
  fields: string[];
  isDate?: boolean;
  isCopyable?: boolean;
};

const TableLineArray: React.FC<MyComponentProps> = ({ name, fields, isDate = false, isCopyable = false }) => {
  const isCollapsed = useState(false);

  return (
    <>
      {fields.length < COUNT_VISIBLE_ITEMS ? (
        <>
          {fields.map((item, index) => (
            <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} key={index} />
          ))}
        </>
      ) : (
        <>

        </>
      )}
    </>
  );
};

export default TableLineArray;

const getName = (index: number, name: string | null | undefined): string => {
  if (index === 0 && name !== undefined && name !== null) return name;
  else return '';
};
