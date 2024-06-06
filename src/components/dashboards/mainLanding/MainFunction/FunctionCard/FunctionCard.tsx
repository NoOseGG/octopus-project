import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  image: string;
  title: string;
  content: string;
};

const FunctionCard: React.FC<MyComponentProps> = ({ image, title, content }) => {
  return (
    <FunctionCardContainer>
      <TitleContainer>
        <Image src={image} alt={'Картинка'} />
        <Title>{title}</Title>
      </TitleContainer>
      <Content>{content}</Content>
    </FunctionCardContainer>
  );
};

export default FunctionCard;

const FunctionCardContainer = styled.div`
  padding: 20px 24px 24px;
  border-radius: 16px;
  background: #073d49;
  color: #fff;

  @media (max-width: 400px) {
    padding: 12px 12px 14px;
  }
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 44px;
  height: auto;
  margin-right: 20px;

  @media (max-width: 400px) {
    width: 32px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 1.33;
  margin: 0;
  font-weight: 800;
  color: #fff;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Content = styled.p`
  line-height: 1.5;
  margin: 0;

  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 1.2;
  }
`;
