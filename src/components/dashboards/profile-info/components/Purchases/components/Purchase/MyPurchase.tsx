import React, { useState } from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';

const COLLAPSE_OPEN = 'Скрыть описание';
const COLLAPSE_CLOSE = 'Показать описание';

type MyComponentProps = {
  purchase: IceTradeCustomer;
};

const MyPurchase: React.FC<MyComponentProps> = ({ purchase }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  return (
    <PurchaseContainer>
      <Title>
        <TitleName>{purchase.title}</TitleName>
        {/*<TitleFromDttm>{`от ${formatDate(purchase.price_byn)}`}</TitleFromDttm>*/}
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLine name={'Объем (количество) поставки'} field={purchase.volume} />
          <TableLine name={'Результат процедуры закупки'} field={`от ${purchase.purchase_status}`} />
          <TableLine name={'Дата и время начала приема предложений'} field={purchase.request_start} isDate={true} />
          {isCollapsed && (
            <>
              <TableLine
                name={'Дата и время окончания приема предложений'}
                field={purchase.request_end}
                isDate={true}
              />
            </>
          )}
        </tbody>
      </S.StyledTable>
      <span onClick={() => handleClick()}>
        <ButtonShow>{isCollapsed ? <>{textCollapseButton}</> : <>{textCollapseButton}</>}</ButtonShow>
      </span>
    </PurchaseContainer>
  );
};

export default MyPurchase;

const PurchaseContainer = styled.div`
  width: 100%;
  margin-top: 1.835rem;
`;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
`;

const TitleName = styled.span`
  color: blue;
`;

const TitleFromDttm = styled.span`
  color: grey;
`;
