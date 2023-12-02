import React from 'react';
import TableLine from '@app/components/dashboards/profile-info/components/Fields/TableLine/TableLine';

type MyComponentProps = {
  name: string | null | undefined;
  fields: string[];
  isDate?: boolean;
  isCopyable?: boolean;
};

const TableLineArray: React.FC<MyComponentProps> = ({ name, fields, isDate = false, isCopyable = false }) => {
  return (
    <>
      {fields.length < 30 ? (
        <>
          {fields.map((item, index) => (
            <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} key={index} />
          ))}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default TableLineArray;

const getName = (index: number, name: string | null | undefined): string => {
  if (index === 0 && name !== undefined && name !== null) return name;
  else return '';
};
