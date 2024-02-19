import React from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doAddFeedback } from '@app/store/slices/feedback/feedbackSlice';

interface FeedBackObject {
  name: string;
  message: string;
}

const AddFeedback: React.FC = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: FeedBackObject) => {
    dispatch(doAddFeedback(`${values.name}: ${values.message}`));
  };

  return (
    <Container>
      <Form style={{ width: 600 }} onFinish={onFinish}>
        <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Введите Ваше имя' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Сообщение" name="message" rules={[{ required: true, message: 'Введите сообщение!' }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item style={{ marginTop: 20 }}>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
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
