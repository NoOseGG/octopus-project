import React, { useState } from 'react';
import { WebSite } from '@app/store/types/Subject';
import styled from 'styled-components';

const WebSites = styled.span`
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
  webSites: WebSite[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <WebSites onClick={handleClick}>Вэб сайты</WebSites>

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Адрес Вэб сайта</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.webSites.map((webSite) => (
            <tr>
              <TableLine>{webSite.url}</TableLine>
              <TableLine>{webSite.from_dttm}</TableLine>
              <TableLine>{webSite.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectWebSites;
