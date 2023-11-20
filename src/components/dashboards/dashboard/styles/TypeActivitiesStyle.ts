import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';

export interface LineProps {
  value: number;
}

export const Container = styled.div`
  margin-top: 20px;
`;

export const Content = styled.div`
  overflow: auto;
  flex: 1;
`;

export const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const TextLine = styled.span`
  font-size: 12px;
`;

export const Line = styled.div<LineProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-inline: 5px;
  background-color: ${(props) => (props.value % 2 === 1 ? '#F3F3F3' : 'transparent')};
`;

export const SpinnerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerTypeActivities = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media only screen and ${mediaMax.lg} {
    display: flex;
    flex-direction: column;
  }
`;
