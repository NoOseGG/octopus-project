import React from 'react';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  firstTitle: string | null;
  secondTitle: string | null;
  fromDate: string | null;
  toDate: string | null;
};

const CommercialRegisterTitle: React.FC<MyComponentProps> = ({ firstTitle, secondTitle, fromDate, toDate }) => {
  const title = firstTitle ? firstTitle : secondTitle;

  return (
    <Title>
      <div>
        <TitleName>{title}</TitleName> <TitleFromDttm>{`от ${formatDate(fromDate)}`}</TitleFromDttm>
      </div>
      {toDate ? (
        <TitleStatus color={'#ffd19b'}>Исключен</TitleStatus>
      ) : (
        <TitleStatus color={'#64bb42'}>Действующий</TitleStatus>
      )}
    </Title>
  );
};

export default CommercialRegisterTitle;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleName = styled.span`
  color: blue;
`;

const TitleFromDttm = styled.span`
  color: grey;
`;

type TitleStatusProps = {
  color: string;
};

const TitleStatus = styled.span<TitleStatusProps>`
  color: #000;
  margin-left: 2rem;
  max-width: 9rem;
  height: 1.125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  font-size: 0.5rem;
  line-height: 0.725rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  background-color: ${(props) => {
    return props.color;
  }};
`;
