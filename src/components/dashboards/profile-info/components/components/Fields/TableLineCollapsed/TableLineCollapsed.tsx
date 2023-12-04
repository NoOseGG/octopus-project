import React, { useState } from 'react';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { Modal } from 'antd';

const COLLAPSE_OPEN = 'Закрыть все';
const COLLAPSE_CLOSE = 'Показать все';

type MyComponentProps = {
  name: string | null | undefined;
  fields: string[];
  isDate?: boolean;
  isCopyable?: boolean;
};

const TableLineCollapsed: React.FC<MyComponentProps> = ({ name, fields, isDate, isCopyable }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);
  const [modalVisible, setModalVisible] = useState(false);

  const success = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    handleClick();
  };

  const handleClick = (isModal = false) => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
    if (isModal) success();
  };

  if (fields.length < 2) {
    return (
      <>
        {fields.map((item, index) => (
          <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} key={index} />
        ))}
      </>
    );
  } else if (fields.length >= 2 && fields.length < 10) {
    return (
      <>
        {!isCollapsed ? (
          <>
            {fields.slice(0, 1).map((item, index) => (
              <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} key={index} />
            ))}
          </>
        ) : (
          <>
            {fields.map((item, index) => (
              <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} key={index} />
            ))}
          </>
        )}
        <span onClick={() => handleClick()}>
          <ButtonShow>
            {isCollapsed ? (
              <>{textCollapseButton}</>
            ) : (
              <>
                {textCollapseButton} ({fields.length})
              </>
            )}
          </ButtonShow>
        </span>
      </>
    );
  } else {
    return (
      <>
        {!isCollapsed ? (
          <>
            {fields.slice(0, 1).map((item, index) => (
              <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} key={index} />
            ))}
          </>
        ) : (
          <Modal visible={modalVisible} onCancel={handleCancel} style={{ top: 5, minWidth: 200 }} footer={null}>
            <table>
              <tbody>
                {fields.map((item, index) => (
                  <tr key={index}>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Modal>
        )}
        <span onClick={() => handleClick(true)}>
          <ButtonShow>
            {isCollapsed ? (
              <>{textCollapseButton}</>
            ) : (
              <>
                {textCollapseButton} ({fields.length})
              </>
            )}
          </ButtonShow>
        </span>
      </>
    );
  }
};

export default TableLineCollapsed;
