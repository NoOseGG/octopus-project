import React from 'react';
import styled from 'styled-components';

const LegendMap: React.FC = () => {
  return (
    <LegendMapContainer>
      <LegendElement>
        <ColorBlock color={'green'} />
        <Text>{` - низкий риск`}</Text>
      </LegendElement>
      <LegendElement>
        <ColorBlock color={'orange'} />
        <Text>{` - средний риск`}</Text>
      </LegendElement>
      <LegendElement>
        <ColorBlock color={'red'} />
        <Text>{` - высокий риск`}</Text>
      </LegendElement>
    </LegendMapContainer>
  );
};

export default LegendMap;

const LegendMapContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: start;
  }
`;

type ColorBlockProps = {
  color: string;
};

const ColorBlock = styled.span<ColorBlockProps>`
  background-color: ${(props) => props.color};
  height: 10px;
  width: 70px;
  border-radius: 12px;
`;

const LegendElement = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Text = styled.span`
  font-size: 12px;
`;
