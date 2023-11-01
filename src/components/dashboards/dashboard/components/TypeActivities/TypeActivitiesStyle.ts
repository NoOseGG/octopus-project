import styled from 'styled-components';

export interface LineProps {
  value: number;
}

export const Container = styled.div`
  font-size: 16px;
  margin-top: 40px;
`;

export const Content = styled.div`
  overflow: auto;
  height: 500px;
  width: 800px;
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
  background-color: ${(props) => (props.value % 2 === 1 ? '#D7D7D7' : 'transparent')};
`;
