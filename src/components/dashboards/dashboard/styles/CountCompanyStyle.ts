import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';

export interface GridProps {
  value: boolean;
}

export const Container = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => (props.value ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)')};
  align-items: center;
`;

export const Block = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;

export interface PercentWithProps {
  number: number;
}

export const Percent = styled.span<PercentWithProps>`
  color: ${(props) => {
    const number = props.number;
    if (number > 0) {
      return 'green';
    } else if (number < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }};
  font-size: 20px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  @media only screen and ${mediaMax.xl} {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  font-size: 36px;
  font-weight: 700;

  @media only screen and ${mediaMax.xl} {
    font-size: 36px;
  }
`;
