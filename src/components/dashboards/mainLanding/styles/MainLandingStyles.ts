import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.backgroundColor};
`;

const InnerContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export { Container, InnerContainer };
