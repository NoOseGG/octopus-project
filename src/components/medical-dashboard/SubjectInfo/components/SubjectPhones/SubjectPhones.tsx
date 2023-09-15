import React, { useState } from 'react';
import styled from 'styled-components';
import { Phone } from '@app/store/types/Subject';

const Phones = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

const Table = styled.table`
  border: 2px solid #000;
  padding: 5px;
`;

const TableTitle = styled.tr`
  border: 1px solid #000;
  background-color: #d48806;
`;

const TableLine = styled.th`
  padding: 5px;
  border: 1px solid #000c17;
`;

type MyComponentProps = {
  phones: Phone[];
};

const SubjectPhones: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Phones onClick={handleClick}>Телефоны</Phones>

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Номер телефона</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.phones.map((phone) => (
            <tr>
              <TableLine>{phone.phone_number}</TableLine>
              <TableLine>{phone.from_dttm}</TableLine>
              <TableLine>{phone.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectPhones;
