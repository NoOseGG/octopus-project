import React, { useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { Typography } from 'antd';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';

const { Text } = Typography;

const Description: React.FC = () => {
  const description = useAppSelector((state) => state.searchProfile.profile.descriptions);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const initialDisplayText = description[0]?.description?.substring(0, 300);
  const [displayText, setDisplayText] = useState(initialDisplayText);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed && description[0].description !== null) {
      setDisplayText(description[0]?.description);
    } else {
      setDisplayText(initialDisplayText);
    }
  };

  return (
    <>
      {description[0]?.description && (
        <Container>
          <S.Title>Описание</S.Title>
          <Text
            style={{
              display: 'block',
              textAlign: 'justify',
              overflow: isCollapsed ? 'hidden' : 'auto',
              maxHeight: isCollapsed ? '3.6em' : 'none',
              lineHeight: '1.2em',
            }}
          >
            {displayText?.replaceAll('&quot;', '"')}
          </Text>
          {description[0].description.length > 300 && (
            <span onClick={toggleCollapse}>
              <ButtonShow>{isCollapsed ? 'Показать полностью' : 'Свернуть'}</ButtonShow>
            </span>
          )}
          <S.MyDivider />
        </Container>
      )}
    </>
  );
};

export default Description;

const Container = styled.div``;
