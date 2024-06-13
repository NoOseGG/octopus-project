import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
`;

export const TableContainer = styled.div`
  margin-top: 20px;
`;

export const NameComponent = styled.div`
  font-size: 22px;
  text-align: center;
  font-weight: 700;
`;

interface ContentProps {
  textAlign?: string;
}

export const Title = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #000;
`;

export const Content = styled.div<ContentProps>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-size: 12px;
  line-height: 1.2;
`;
