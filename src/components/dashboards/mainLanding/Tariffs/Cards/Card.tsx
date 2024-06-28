import React, { useEffect, useState } from 'react';
import * as S from './CardStyles';
import { CardType, getName, getPrice } from '@app/components/dashboards/mainLanding/Tariffs/utils';
import NumberInput from '@app/components/dashboards/mainLanding/Tariffs/NumberInput/NumberImput';
import { formatNumberWithCommas } from '@app/utils/utils';
import { scrollToLanding, ScrollType } from '@app/components/dashboards/mainLanding/utils/utils';
import TariffsModal from '@app/components/dashboards/mainLanding/Tariffs/Modal/TariffsModal';

type CardProps = {
  cardType: CardType;
};

const Card: React.FC<CardProps> = ({ cardType }) => {
  const [countUser, setCountUser] = useState(1);
  const [countMonth, setCountMonth] = useState(1);
  const [price, setPrice] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPrice(getPrice(countMonth, countUser));
  }, [countMonth, countUser]);

  const handleClick = () => {
    if (cardType === CardType.DEMO) {
      scrollToLanding(ScrollType.Demo);
    } else {
      setIsOpen(true);
    }
    console.log('click');
  };

  return (
    <S.Container>
      <S.NameBlock>{getName(cardType)}</S.NameBlock>
      <S.PriceBlock>
        <S.PriceNumber>{cardType === CardType.DEMO ? 0 : formatNumberWithCommas(price)}</S.PriceNumber>
        <S.PriceName>рублей</S.PriceName>
      </S.PriceBlock>
      <S.InfoBlock>
        {cardType === CardType.SPECIAL ? (
          <>
            <S.InfoTextInput>
              <span>Пользователей</span> <NumberInput value={countUser} onChange={setCountUser} />
            </S.InfoTextInput>
            <S.InfoTextInput>
              <span>Число месяцев</span> <NumberInput value={countMonth} onChange={setCountMonth} />
            </S.InfoTextInput>
          </>
        ) : (
          <>
            <S.InfoText>
              <S.Bold>1</S.Bold> Пользователь
            </S.InfoText>
            <S.InfoText>
              <S.Bold>1</S.Bold> {cardType === CardType.DEMO ? 'день' : 'месяц'}
            </S.InfoText>
          </>
        )}
        <S.InfoText>Аналитический дашборд</S.InfoText>
        <S.InfoText>Информация о субъектах</S.InfoText>
      </S.InfoBlock>
      <S.ButtonBlock>
        <S.StyledButton onClick={handleClick}>
          {cardType === CardType.DEMO ? 'Попробовать' : 'Приобрести'}
        </S.StyledButton>
      </S.ButtonBlock>
      <TariffsModal
        isOpen={isOpen}
        onSetIsOpen={setIsOpen}
        countMonth={countMonth}
        countUser={countUser}
        price={price}
      />
    </S.Container>
  );
};

export default Card;
