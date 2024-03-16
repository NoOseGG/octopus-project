import React, { useState } from 'react';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { Modal } from 'antd';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';

const COLLAPSE_OPEN = 'Закрыть все';
const COLLAPSE_CLOSE = 'Показать все';

type MyComponentProps = {
  name: string | null | undefined;
  fields: string[];
  isDate?: boolean;
  isCopyable?: boolean;
  isLink?: boolean;
  postfix?: string;
};

const TableLineCollapsed: React.FC<MyComponentProps> = ({ name, fields, isDate, isCopyable, isLink, postfix }) => {
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
          <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} isLink={isLink} key={index} />
        ))}
      </>
    );
  } else if (fields.length >= 2 && fields.length < 10) {
    return (
      <>
        {!isCollapsed ? (
          <>
            {fields.slice(0, 1).map((item, index) => (
              <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} isLink={isLink} key={index} />
            ))}
          </>
        ) : (
          <>
            {fields.map((item, index) => {
              if (index < 1)
                return (
                  <TableLine
                    name={name}
                    field={item}
                    isDate={isDate}
                    isCopyable={isCopyable}
                    isLink={isLink}
                    key={index}
                  />
                );
              else
                return (
                  <TableLine
                    name={' '}
                    field={item}
                    isDate={isDate}
                    isCopyable={isCopyable}
                    isLink={isLink}
                    key={index}
                  />
                );
            })}
          </>
        )}
        <span onClick={() => handleClick()}>
          <ButtonShow>
            {isCollapsed ? (
              <>
                {textCollapseButton} {postfix}
              </>
            ) : (
              <>
                {textCollapseButton} {postfix} ({fields.length - 1})
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
              <TableLine name={name} field={item} isDate={isDate} isCopyable={isCopyable} isLink={isLink} key={index} />
            ))}
          </>
        ) : (
          <Modal visible={modalVisible} onCancel={handleCancel} style={{ top: 5, minWidth: 200 }} footer={null}>
            <table>
              <tbody>
                {fields.map((item, index) => (
                  <>
                    {index !== 0 && (
                      <tr key={index}>
                        <td>
                          <CopyButton text={item} /> {item}
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </Modal>
        )}
        <span onClick={() => handleClick(true)}>
          <ButtonShow>
            {isCollapsed ? (
              <>
                {textCollapseButton} {postfix}
              </>
            ) : (
              <>
                {textCollapseButton} {postfix} ({fields.length - 1})
              </>
            )}
          </ButtonShow>
        </span>
      </>
    );
  }
};

export default TableLineCollapsed;
