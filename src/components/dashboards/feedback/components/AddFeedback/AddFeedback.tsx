import React from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doAddFeedback } from '@app/store/slices/feedback/feedbackSlice';
import { notificationController } from '@app/controllers/notificationController';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

interface FeedBackObject {
  name: string;
  message: string;
}

const AddFeedback: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const onFinish = (values: FeedBackObject) => {
    if (checkedMessages(values.message)) {
      dispatch(doAddFeedback(`${user?.first_name} ${user?.last_name}: ${values.message}`));
      notificationController.success({
        message: `Обращение получено, ответ будет отправлен на электронный адрес "${user?.email}"`,
      });
    } else {
      notificationController.error({
        message: 'Некоректное сообщение',
      });
    }
  };

  const checkedMessages = (message: string): boolean => {
    return user?.first_name !== null && user?.last_name !== null && message.trim().length > 5;
  };

  return (
    <Container>
      <Form style={{ width: 600 }} onFinish={onFinish}>
        <Form.Item label="Сообщение" name="message" rules={[{ required: true, message: 'Введите сообщение!' }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item style={{ marginTop: 20 }}>
          <SubmitButton htmlType="submit">Отправить</SubmitButton>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default AddFeedback;

const Container = styled.div`
  width: 800px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled(Button)`
  height: auto;
  margin-top: 10px;
  padding: 10px 0;
  width: 100%;
  background-color: ${MyStyles.primaryColor};
  color: #fff;

  &:hover {
  }
`;
