import React, { ChangeEvent, useState } from 'react';

import styled from 'styled-components';

type PhoneInputProps = {
  value: string;
  setValue: (value: string) => void;
};

const PhoneInput: React.FC<PhoneInputProps> = ({ value, setValue }) => {
  const [maxLength, setMaxLength] = useState(11);

  const getInputNumbersValue = (input: string) => {
    return input.replace(/\D/g, '');
  };

  const addPlus = (input: string): string => {
    if (['3', '8'].indexOf(input[0]) > -1) {
      if (input[0] == '3') {
        setMaxLength(17);
        return '+' + input;
      }
      if (input[0] == '8') {
        setMaxLength(11);
        return input;
      }
    }
    return '';
  };

  const formatPhoneNumber = (input: string): string => {
    if (input[0] === '8') return input;
    if (input[0] !== '+') return '';

    const patterns: { [key: number]: string } = {
      4: input.substring(0, 5),
      5: `${input.substring(0, 4)}(${input.substring(4, 7)}`,
      6: `${input.substring(0, 4)}(${input.substring(4, 7)}`,
      7: `${input.substring(0, 4)}(${input.substring(4, 6)})${input.substring(6, 9)}`,
      8: `${input.substring(0, 4)}(${input.substring(4, 6)})${input.substring(6, 9)}`,
      9: `${input.substring(0, 4)}(${input.substring(4, 6)})${input.substring(6, 9)}`,
      10: `${input.substring(0, 4)}(${input.substring(4, 6)})${input.substring(6, 9)}-${input.substring(9, 11)}`,
      11: `${input.substring(0, 4)}(${input.substring(4, 6)})${input.substring(6, 9)}-${input.substring(9, 11)}`,
      12: `${input.substring(0, 4)}(${input.substring(4, 6)})${input.substring(6, 9)}-${input.substring(
        9,
        11,
      )}-${input.substring(11, 13)}`,
      13: `${input.substring(0, 4)}(${input.substring(4, 6)})${input.substring(6, 9)}-${input.substring(
        9,
        11,
      )}-${input.substring(11, 13)}`,
    };

    return patterns[input.length] || input;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputNumbersValue = getInputNumbersValue(event.target.value);

    if (inputNumbersValue.length === 0) setValue('');

    let formattedPhone = addPlus(inputNumbersValue);
    formattedPhone = formatPhoneNumber(formattedPhone);

    setValue(formattedPhone);
  };

  return (
    <Input
      type="tel"
      name={'phone'}
      id={'phone'}
      placeholder={'375(29)123-45-67'}
      required={true}
      value={value}
      onChange={handleChange}
      minLength={maxLength}
      maxLength={maxLength}
    />
  );
};

export default PhoneInput;

const Input = styled.input`
  padding: 0 10px;
  height: 50px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
`;
