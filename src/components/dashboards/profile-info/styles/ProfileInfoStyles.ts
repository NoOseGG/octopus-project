import styled from 'styled-components';
import { Divider } from 'antd';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f2f2f2; /* Серый цвет фона для четных строк */
  }
`;

export const StyledCell = styled.td`
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const LeftCell = styled(StyledCell)`
  width: 30%;
  color: #000;
  padding-right: 5px;
`;

export const RightCell = styled(StyledCell)`
  width: 70%;
  color: #333;
`;

export const Text = styled.div`
  font-size: 0.9374rem;
  line-height: 1.47;
  white-space: pre-wrap;
`;

export const ButtonShowStyle = styled.span`
  font-size: 0.9374rem;
  line-height: 1.47;
  white-space: pre-wrap;
  color: ${MyStyles.primaryColor};
  font-weight: 700;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.47;
  white-space: pre-wrap;
`;

//

export const CountInformationContainer = styled.div`
  margin-top: 1.8735rem;
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #b7b6b6;
  border-radius: 5px;
`;

//---------------------------------------------

export const Container = styled.div`
  width: 100%;
`;

export const ContainerLineText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MyDivider = styled(Divider)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
