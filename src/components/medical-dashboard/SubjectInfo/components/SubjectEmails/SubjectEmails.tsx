import React, { useState } from 'react';
import styled from 'styled-components';
import { Emails } from '@app/store/types/Subject';

const Email = styled.span`
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
  emails: Emails[];
};

const SubjectPhones: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.emails[0] && (
        <div>
          <Email onClick={handleClick}>Емэйл:</Email> {props.emails[0].email}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Электронная почта</TableLine>
            <TableLine>Дата начала действия</TableLine>
          </TableTitle>
          {props.emails.map((email) => (
            <tr>
              <TableLine>{email.email}</TableLine>
              <TableLine>{email.from_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectPhones;
