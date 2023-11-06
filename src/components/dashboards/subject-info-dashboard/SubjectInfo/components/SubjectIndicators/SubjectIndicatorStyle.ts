import styled from 'styled-components';

export const GRID_AREA = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

type ContainerProps = {
  gridArea: string;
};

export const Container = styled.div<ContainerProps>`
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RiskContainer = styled.div`
  display: flex;
  gap: 2px;
`;
