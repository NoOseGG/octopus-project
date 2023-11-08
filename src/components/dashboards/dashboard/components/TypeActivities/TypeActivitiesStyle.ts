import styled from 'styled-components';

export interface LineProps {
  value: number;
}

export const Container = styled.div`
  height: 400px;
  font-size: 16px;
  margin-top: 40px;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  padding: 10px;
`;

export const Content = styled.div`
  overflow: auto;
  max-height: calc(100% - 50px);
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
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
