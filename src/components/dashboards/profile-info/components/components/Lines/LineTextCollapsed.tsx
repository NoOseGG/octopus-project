import React, { useState } from 'react';
import LineText from '@app/components/dashboards/profile-info/components/components/Lines/LineText';
import CollapsedButton from '@app/components/dashboards/profile-info/components/components/Lines/CollapsedButton';

type MyComponentProps = {
  name: string;
  contents: string[];
  isDate?: boolean;
  isCopyable?: boolean;
  isLink?: boolean;
  isPhone?: boolean;
  isMap?: boolean;
  isColor?: boolean;
  postfix?: string;
};

const LineTextCollapsed: React.FC<MyComponentProps> = ({
  name,
  contents,
  isDate,
  isCopyable,
  isLink,
  isPhone,
  isMap,
  isColor,
  postfix,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    // if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    // else setTextCollapseButton(COLLAPSE_OPEN);
    if (isModal) success();
  };

  const handleClickCollapsed = (value: boolean): void => {
    setIsCollapsed(value);
  };

  if (contents.length === 1) {
    return (
      <LineText
        name={name}
        content={contents[0]}
        isCopyable={isCopyable}
        isDate={isDate}
        isLink={isLink}
        isPhone={isPhone}
        isMap={isMap}
      />
    );
  }

  if (contents.length >= 2) {
    return (
      <>
        {!isCollapsed ? (
          <>
            {contents.slice(0, 1).map((item, index) => (
              <LineText
                name={name}
                content={item}
                isDate={isDate}
                isCopyable={isCopyable}
                isLink={isLink}
                isPhone={isPhone}
                isMap={isMap}
                buttonCollapse={<CollapsedButton isCollapsed={isCollapsed} setCollapsed={handleClickCollapsed} />}
                key={index}
              />
            ))}
          </>
        ) : (
          <>
            {contents.map((item, index) => {
              if (index < 1)
                return (
                  <LineText
                    name={name}
                    content={item}
                    isDate={isDate}
                    isCopyable={isCopyable}
                    isLink={isLink}
                    isPhone={isPhone}
                    isMap={isMap}
                    buttonCollapse={<CollapsedButton isCollapsed={isCollapsed} setCollapsed={handleClickCollapsed} />}
                    key={index}
                  />
                );
              else
                return (
                  <LineText
                    name={' '}
                    content={item}
                    isDate={isDate}
                    isCopyable={isCopyable}
                    isLink={isLink}
                    isPhone={isPhone}
                    isMap={isMap}
                    isColor={isColor}
                    key={index}
                  />
                );
            })}
          </>
        )}
      </>
    );
  }

  return null;
};

export default LineTextCollapsed;
