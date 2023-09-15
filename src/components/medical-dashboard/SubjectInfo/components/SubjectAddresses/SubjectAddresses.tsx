import React, { useState } from 'react';
import styled from 'styled-components';
import { Address } from '@app/store/types/Subject';

const Table = styled.table`
  border: 2px solid #000;
  padding: 5px;
`;

const TableTitle = styled.tr`
  border: 1px solid #000;
  background-color: #d48806;
`;

const TableLine = styled.th`
  border: 1px solid #000c17;
`;

const Addresses = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

type MyComponentProps = {
  addresses: Address[];
};

const SubjectAddresses: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Addresses onClick={handleClick}>Адреса</Addresses>

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Почтовый индекс</TableLine>
            <TableLine>Область</TableLine>
            <TableLine>Район</TableLine>
            <TableLine>Населеный пункт</TableLine>
            <TableLine>Полный адрес</TableLine>
            <TableLine>Дата начала действия</TableLine>
          </TableTitle>
          {props.addresses.map((address) => (
            <tr>
              <TableLine>{address.postcode}</TableLine>
              <TableLine>{address.region}</TableLine>
              <TableLine>{address.district}</TableLine>
              <TableLine>{address.settlement}</TableLine>
              <TableLine>{address.full_address}</TableLine>
              <TableLine>{address.from_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectAddresses;
