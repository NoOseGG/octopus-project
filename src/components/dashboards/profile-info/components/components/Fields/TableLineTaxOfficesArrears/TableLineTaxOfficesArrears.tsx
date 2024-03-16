import React, { Fragment, useState } from 'react';
import { TaxOfficeArrea } from '@app/store/types/Subject';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';

const COLLAPSE_OPEN = 'Закрыть все задолженности';
const COLLAPSE_CLOSE = 'Показать все задолженности';

type MyComponentProps = {
  taxOfficesArrears: TaxOfficeArrea[];
};

const TableLineTaxOfficesArrears: React.FC<MyComponentProps> = ({ taxOfficesArrears }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  if (taxOfficesArrears.length === 1) {
    return (
      <>
        {taxOfficesArrears.map((item, index) => (
          <Fragment key={index}>
            <TableLine name={'Код'} field={item.code} />
            <TableLine name={'Наименование'} field={item.name} />
            <TableLine name={'Код региона'} field={item.region_code} />
            <TableLine name={'Название региона'} field={item.region_name} />
            <TableLine name={'Дата начала действия'} field={item.from_dttm} isDate={true} />
            <TableLine name={'Дата окончания действия'} field={item.to_dttm} isDate={true} />
          </Fragment>
        ))}
      </>
    );
  } else {
    return (
      <>
        {!isCollapsed ? (
          <>
            {taxOfficesArrears.slice(0, 1).map((item, index) => (
              <Fragment key={index}>
                <TableLine name={'Код'} field={item.code} />
                <TableLine name={'Наименование'} field={item.name} />
                <TableLine name={'Код региона'} field={item.region_code} />
                <TableLine name={'Название региона'} field={item.region_name} />
                <TableLine name={'Дата начала действия'} field={item.from_dttm} isDate={true} />
                <TableLine name={'Дата окончания действия'} field={item.to_dttm} isDate={true} />
              </Fragment>
            ))}
          </>
        ) : (
          <>
            {taxOfficesArrears.map((item, index) => (
              <Fragment key={index}>
                <TableLine name={'Код'} field={item.code} />
                <TableLine name={'Наименование'} field={item.name} />
                <TableLine name={'Код региона'} field={item.region_code} />
                <TableLine name={'Название региона'} field={item.region_name} />
                <TableLine name={'Дата начала действия'} field={item.from_dttm} isDate={true} />
                <TableLine name={'Дата окончания действия'} field={item.to_dttm} isDate={true} />
                <br />
              </Fragment>
            ))}
          </>
        )}
        <span onClick={() => handleClick()}>
          <ButtonShow>
            {isCollapsed ? (
              <>{textCollapseButton}</>
            ) : (
              <>
                {textCollapseButton} ({taxOfficesArrears.length})
              </>
            )}
          </ButtonShow>
        </span>
      </>
    );
  }
};

export default TableLineTaxOfficesArrears;
