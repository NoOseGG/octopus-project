import React, { useState } from 'react';
import styled from 'styled-components';
import { TypeActivity } from '@app/store/types/Subject';

const TypesActivities = styled.span`
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
  typesActivities: TypeActivity[];
};

const SubjectPhones: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.typesActivities[0] && (
        <div>
          <TypesActivities onClick={handleClick}>Данные о виде деятельности:</TypesActivities>{' '}
          {props.typesActivities[0].name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Код</TableLine>
            <TableLine>Наименование</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.typesActivities.map((typeActivity) => (
            <tr>
              <TableLine>{typeActivity.code}</TableLine>
              <TableLine>{typeActivity.name}</TableLine>
              <TableLine>{typeActivity.from_dttm}</TableLine>
              <TableLine>{typeActivity.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectPhones;
