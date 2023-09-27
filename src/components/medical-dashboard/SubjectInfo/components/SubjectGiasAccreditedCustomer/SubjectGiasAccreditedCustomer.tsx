import React, { useState } from 'react';
import styled from 'styled-components';
import { GiasAccreditedCustomer, Status, TypeActivity } from '@app/store/types/Subject';

const GiasCustomer = styled.span`
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
  giasAccreditedCustomers: GiasAccreditedCustomer[];
};

const SubjectPhones: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(props.giasAccreditedCustomers);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.giasAccreditedCustomers[0] && (
        <div>
          <GiasCustomer onClick={handleClick}>Реестр ГИАС аккредитованных заказчиков:</GiasCustomer>{' '}
          {props.giasAccreditedCustomers[0].is_customer}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Дата включения в реестр</TableLine>
            <TableLine>Дата исключения из реестра</TableLine>
            <TableLine>Является или нет поставщиком</TableLine>
            <TableLine>Является или нет заказчиком</TableLine>
            <TableLine>Ведомственная принадлежность</TableLine>
          </TableTitle>
          {props.giasAccreditedCustomers.map((giasAccreditedCustomer) => (
            <tr>
              <TableLine>{giasAccreditedCustomer.from_dttm}</TableLine>
              <TableLine>{giasAccreditedCustomer.to_dttm}</TableLine>
              <TableLine>{giasAccreditedCustomer.is_customer}</TableLine>
              <TableLine>{giasAccreditedCustomer.is_organizer}</TableLine>
              <TableLine>{giasAccreditedCustomer.departmental_affiliation}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectPhones;
