import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background: ${(props) => props.backgroundColor};
  font-family: 'Onest', sans-serif;
`;

const InnerContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 1920px) {
    width: 1920px;
  }
`;

const Title = styled.h2`
  font-size: 56px;
  text-align: center;
  color: #fff;
  font-weight: 800;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export { Container, InnerContainer, Title };
