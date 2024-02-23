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
  background: #fff;
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
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 1.33;
  margin: 0;
  font-weight: 800;
  color: #292f37;
`;

const Content = styled.p`
  line-height: 1.5;
  margin: 0;
  color: #4c515c;
`;
