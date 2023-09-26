import React, { useState } from 'react';
import styled from 'styled-components';
import { CommercialRegister } from '@app/store/types/Subject';

const Commercial = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 5px;
  border: 1px solid #ffc53d;
  margin: 10px 0;
`;

const Line = styled.div`
  padding: 5px;
  border: 1px solid #000c17;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  padding: 5px;
  text-align: center;
`;

type MyComponentProps = {
  commercialsRegister: CommercialRegister[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.commercialsRegister[0] && (
        <div>
          <Commercial onClick={handleClick}>Данные из торгового реестра:</Commercial> Количество данных -{' '}
          {props.commercialsRegister.length}
        </div>
      )}
      {isExpanded && (
        <div>
          {props.commercialsRegister.map((commercialRegister) => (
            <Container>
              <Title>{commercialRegister.type_retail_format}</Title>
              {commercialRegister.from_dttm && <Line>Дата включения в реестр: {commercialRegister.from_dttm}</Line>}
              {commercialRegister.to_dttm && <Line>Дата исключения из реестра: {commercialRegister.to_dttm}</Line>}
              {commercialRegister.reg_num && (
                <Line>Регистрационный номер в Торговом реестре: {commercialRegister.reg_num}</Line>
              )}
              {commercialRegister.object_type && <Line>Тип объекта: {commercialRegister.object_type}</Line>}
              {commercialRegister.trade_network_name && (
                <Line>Название торговой сети: {commercialRegister.trade_network_name}</Line>
              )}
              {commercialRegister.type_retail_format && (
                <Line>Вид торгового объекта по формату: {commercialRegister.type_retail_format}</Line>
              )}
              {commercialRegister.type_retail_goods && (
                <Line>
                  Вид торгового объекта по ассортименту реализуемых товаров: {commercialRegister.type_retail_goods}
                </Line>
              )}
              {commercialRegister.object_type_location && (
                <Line>Вид объекта по месту расположения: {commercialRegister.object_type_location}</Line>
              )}
              {commercialRegister.brand_retail && (
                <Line>Фирменный торговый объект: {commercialRegister.brand_retail}</Line>
              )}
              {commercialRegister.type_retail && <Line>Тип торгового объекта: {commercialRegister.type_retail}</Line>}
              {commercialRegister.trade_area && (
                <Line>Торговая площадь торгового объекта: {commercialRegister.trade_area}</Line>
              )}
              {commercialRegister.type_catering && (
                <Line>Тип объекта общественного питания: {commercialRegister.type_catering}</Line>
              )}
              {commercialRegister.number_places_catering && (
                <Line>
                  Количество мест в объекте общественного питания: {commercialRegister.number_places_catering}
                </Line>
              )}
              {commercialRegister.number_public_places_catering && (
                <Line>
                  Количество общедоступных мест в объекте общественного питания:{' '}
                  {commercialRegister.number_public_places_catering}
                </Line>
              )}
              {commercialRegister.shopping_center_specialization && (
                <Line>Специализация торгового центра: {commercialRegister.shopping_center_specialization}</Line>
              )}
              {commercialRegister.market_type && <Line>Тип рынка: {commercialRegister.market_type}</Line>}
              {commercialRegister.market_specialization && (
                <Line>Специализация рынка: {commercialRegister.market_specialization}</Line>
              )}
              {commercialRegister.forms_retail && (
                <Line>
                  Формы розничной торговли, осуществляемые без использования торгового объекта:{' '}
                  {commercialRegister.forms_retail}
                </Line>
              )}
              {commercialRegister.object_address_full && (
                <Line>Полный адрес торгового объекта: {commercialRegister.object_address_full}</Line>
              )}
              {commercialRegister.object_address_region && (
                <Line>Область торгового объекта: {commercialRegister.object_address_region}</Line>
              )}
              {commercialRegister.object_address_district && (
                <Line>Район торгового объекта: {commercialRegister.object_address_district}</Line>
              )}
              {commercialRegister.object_address_settlement && (
                <Line>Населенный пункт торгового объекта: {commercialRegister.object_address_settlement}</Line>
              )}
              {commercialRegister.goods_classes && <Line>Классы товаров: {commercialRegister.goods_classes}</Line>}
              {commercialRegister.product_groups && <Line>Группы товаров: {commercialRegister.product_groups}</Line>}
              {commercialRegister.product_subgroups && (
                <Line>Подгруппы товаров: {commercialRegister.product_subgroups}</Line>
              )}
              {commercialRegister.type_retail_trade && (
                <Line>
                  {`Вид торговли "розничная торговля"`}: {commercialRegister.type_retail_trade}
                </Line>
              )}
              {commercialRegister.type_wholesale_trade && (
                <Line>
                  {`Вид торговли "оптовая торговля"`}: {commercialRegister.type_wholesale_trade}
                </Line>
              )}
            </Container>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectWebSites;
