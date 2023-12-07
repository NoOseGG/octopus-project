import React, { useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { Typography } from 'antd';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';

const { Text } = Typography;

const Description: React.FC = () => {
  const description = useAppSelector((state) => state.searchProfile.profile.descriptions);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {description[0]?.description && (
        <Container>
          <Text
            style={{
              display: 'block',
              textAlign: 'justify',
              overflow: isCollapsed ? 'hidden' : 'auto',
              maxHeight: isCollapsed ? '3.6em' : 'none',
              lineHeight: '1.2em',
            }}
          >
            {description[0].description}
          </Text>
          {description[0].description.length > 100 && (
            <span onClick={toggleCollapse}>
              <ButtonShow>{isCollapsed ? 'Показать полностью' : 'Свернуть'}</ButtonShow>
            </span>
          )}
        </Container>
      )}
    </>
  );
};

export default Description;

const Container = styled.div`
  margin-right: 250px;
  margin-bottom: 1.875rem;
`;
