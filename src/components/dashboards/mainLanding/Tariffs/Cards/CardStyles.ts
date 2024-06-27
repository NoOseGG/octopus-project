import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
`;

const NameBlock = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-self: center;
  border-bottom: 1px solid #e0dada;
  background-color: #edeef0;
  font-size: 20px;
  text-transform: uppercase;
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  border-bottom: 1px solid #e0dada;
  background-color: #edeef0;
`;

const PriceNumber = styled.div`
  font-size: 50px;
  color: #000;
`;

const PriceName = styled.div`
  font-size: 16px;
  color: #4b4949;
`;

const InfoBlock = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e0dada;
`;

const InfoText = styled.div`
  font-size: 18px;
  color: #575454;
  gap: 20px;
`;

const InfoTextInput = styled.div`
  padding: 0 55px;
  width: 100%;
  font-size: 18px;
  color: #575454;
  display: flex;
  justify-content: space-between;

  @media (max-width: 370px) {
    padding: 0 40px;
  }

  @media (max-width: 330px) {
    padding: 0 20px;
  }
`;

const Bold = styled.span`
  color: #000;
  font-weight: 700;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 20px;
  background-color: #edeef0;
`;

const StyledButton = styled.button`
  padding: 10px 0;
  background: linear-gradient(to right, #60a200, #79bd0c);
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #72c002, #87d211);
  }
`;

export {
  Container,
  NameBlock,
  PriceBlock,
  PriceNumber,
  PriceName,
  InfoBlock,
  InfoText,
  InfoTextInput,
  Bold,
  ButtonBlock,
  StyledButton,
};
