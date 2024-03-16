import styled from 'styled-components';

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
  color: #666;
  padding-right: 5px;
`;

export const RightCell = styled(StyledCell)`
  width: 70%;
  color: #222;
`;

export const Text = styled.div`
  font-size: 0.9374rem;
  line-height: 1.47;
  white-space: pre-wrap;
`;

export const ButtonShowStyle = styled(Text)`
  color: blue;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const Title = styled(Text)`
  font-weight: 700;
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
