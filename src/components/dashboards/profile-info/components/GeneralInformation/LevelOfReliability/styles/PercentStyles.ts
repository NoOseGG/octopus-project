import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  //align-self: center;
  //display: flex;
  //flex-direction: column;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 25px);
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const TopLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const MiddleLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color: gray;
`;

export const BottomLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: gray;
`;

type ItemProps = {
  backgroundColor?: string;
  fontWeight?: number;
  fontSize?: number;
};

export const Item = styled.div<ItemProps>`
  display: flex;
  min-height: 25px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#fff')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};

  //&:not(:last-child) {
  //  border-right: 1px solid #000;
  //}

  @media (max-width: 1600px) {
    font-size: 12px;
  }

  @media (max-width: 1460px) {
    font-size: 10px;
  }

  @media (max-width: 1300px) {
    font-size: 14px;
  }

  @media (max-width: 850px) {
    font-size: 12px;
  }

  @media (max-width: 778px) {
    font-size: 10px;
  }
`;

export const Red = styled.span`
  color: red;
`;

export const Orange = styled.span`
  color: orange;
`;

export const Green = styled.span`
  color: green;
`;
