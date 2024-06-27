import React from 'react';
import styled from 'styled-components';

const NumberInputWrapper = styled.div`
  position: relative;
  width: 40px;
`;

const StyledNumberInput = styled.input`
  width: 40px;
  height: 25px;
  display: flex;
  text-align: center;
  -moz-appearance: textfield;
  outline: none;
  border: 1px solid #575454;
  border-radius: 8px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const ArrowUp = styled.div`
  position: absolute;
  right: -16px;
  top: 0;
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 16px;

  &::after {
    content: '▲';
    font-size: 10px;
  }
`;

const ArrowDown = styled.div`
  position: absolute;
  right: -16px;
  bottom: 0;
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 16px;

  &::after {
    content: '▼';
    font-size: 10px;
  }
`;

type NumberInputProps = {
  value: number;
  onChange: (value: number) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <NumberInputWrapper>
      <StyledNumberInput type="number" min={1} value={value} onChange={(e) => onChange(parseInt(e.target.value, 10))} />
      <ArrowUp onClick={handleIncrement} />
      <ArrowDown onClick={handleDecrement} />
    </NumberInputWrapper>
  );
};

export default NumberInput;
