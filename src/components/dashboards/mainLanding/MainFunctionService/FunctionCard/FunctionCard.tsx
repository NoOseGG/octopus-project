import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  image: string;
  text: string;
};

const FunctionCard: React.FC<MyComponentProps> = ({ image, text }) => {
  return (
    <DataContainer>
      <ImageCard src={image} alt={'Картинка'} />
      <Text>{text}</Text>
    </DataContainer>
  );
};

export default FunctionCard;

const Text = styled.p`
  width: 350px;
  text-align: justify;
`;

const ImageCard = styled.img`
  width: 220px;
  height: 250px;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
