import React, { useState } from 'react';
import {Description, WebSite} from '@app/store/types/Subject';
import styled from 'styled-components';

const Descriptions = styled.span`
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
  descriptions: Description[];
};

const SubjectDescriptions: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.descriptions[0] && (
        <div>
          <Descriptions onClick={handleClick}>Описание:</Descriptions> {props.descriptions[0].description}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Описание</TableLine>
            <TableLine>Дата начала действия</TableLine>
          </TableTitle>
          {props.descriptions.map((description) => (
            <tr>
              <TableLine>{description.description}</TableLine>
              <TableLine>{description.from_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectDescriptions;
