import React, { useState } from 'react';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { TypeActivity } from '@app/store/types/Subject';

const COLLAPSE_OPEN = 'Закрыть все';
const COLLAPSE_CLOSE = 'Показать все';

type MyComponentProps = {
  typeActivities: TypeActivity[];
};

const TableLineCollapsedTypeActivities: React.FC<MyComponentProps> = ({ typeActivities }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  if (typeActivities.length === 1) {
    return (
      <>
        {typeActivities.map((item, index) => (
          <TableLine name={item.code} field={item.name} key={index} />
        ))}
      </>
    );
  } else {
    return (
      <>
        {!isCollapsed ? (
          <>
            {typeActivities.slice(0, 1).map((item, index) => (
              <TableLine name={item.code} field={item.name} key={index} />
            ))}
          </>
        ) : (
          <>
            {typeActivities.map((item, index) => (
              <TableLine name={item.code} field={item.name} key={index} />
            ))}
          </>
        )}
        <span onClick={() => handleClick()}>
          <ButtonShow>
            {isCollapsed ? (
              <>{textCollapseButton}</>
            ) : (
              <>
                {textCollapseButton} ({typeActivities.length})
              </>
            )}
          </ButtonShow>
        </span>
      </>
    );
  }
};

export default TableLineCollapsedTypeActivities;
