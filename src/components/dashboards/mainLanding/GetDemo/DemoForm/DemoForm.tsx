import React, { useState } from 'react';
import styled from 'styled-components';

const DemoForm: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeCheckbox = () => {
    setIsDisabled((prevState) => !prevState);
  };

  const handleSubmit = () => {
    console.log('Форма отправлена');
  };

  return (
    <DemoFormContainer>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="name">Ваше имя *</Label>
          <Input type="text" name={'name'} id={'name'} placeholder={'Иванов Иван Иванович'} required={true} />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="company">Название компании *</Label>
          <Input type="text" name={'company'} id={'company'} placeholder={'ООО "Аналитик Про'} required={true} />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Электронный адрес *</Label>
          <Input type="email" name={'email'} id={'email'} placeholder={'info@analytix.by'} required={true} />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="phone">Мобильный телефон *</Label>
          <Input type="tel" name={'phone'} id={'phone'} placeholder={'+375 (__) ___-__-__'} required={true} />
        </InputContainer>
        <PrivacyContainer>
          <input
            style={{ marginTop: 2 }}
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={!isDisabled}
            onChange={handleChangeCheckbox}
            required={true}
          />
          <LabelPrivacy htmlFor="privacy">
            Заполняя и отправляя данные из настоящей веб-формы подтверждаю ознакомление с Политикой обработки
            персональных данных и выражаю свое согласие на обработку моих персональных данных в порядке, объеме и на
            условиях, ею установленных, а также то что ознакомился (лась) и принимаю условия Публичного договора.
          </LabelPrivacy>
        </PrivacyContainer>

        <Button type={'submit'} isDisabled={isDisabled} disabled={isDisabled}>
          Получить Демо
        </Button>
      </Form>
    </DemoFormContainer>
  );
};

export default DemoForm;

const DemoFormContainer = styled.div`
  padding: 10px;
  width: 60%;
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0 10px;
  height: 50px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
`;

const PrivacyContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 5px;
`;

const LabelPrivacy = styled.label`
  font-size: 12px;
`;

const Label = styled.label`
  font-size: 12px;
`;

type ButtonProps = {
  isDisabled: boolean;
};

const Button = styled.button<ButtonProps>`
  margin-top: 20px;
  width: 100%;
  background-color: #60a200;
  border: none;
  border-radius: 4px;
  padding: 20px 0;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.isDisabled ? 0.6 : 1)};

  &:hover {
    background-color: #568f02;
  }
`;
