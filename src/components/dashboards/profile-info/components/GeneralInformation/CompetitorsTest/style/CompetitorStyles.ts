import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  @media only screen and ${mediaMax.xl} {
    font-size: 10px;
  }
`;

export const Content = styled.div`
  font-size: 26px;
  font-weight: 700;
  display: flex;
  flex-direction: column;

  @media only screen and ${mediaMax.xl} {
    font-size: 16px;
  }
`;
