import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
`;

export const TopLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const MiddleLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};

  &:not(:last-child) {
    border-right: 1px solid #000;
  }
`;
