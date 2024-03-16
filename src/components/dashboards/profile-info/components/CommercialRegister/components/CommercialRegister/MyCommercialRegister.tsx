import React, { useState } from 'react';
import { CommercialRegister } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import CommercialRegisterTitle from '@app/components/dashboards/profile-info/components/CommercialRegister/components/CommercialRegisterTitle/CommercialRegisterTitle';

const COLLAPSE_OPEN = 'Скрыть данные';
const COLLAPSE_CLOSE = 'Показать данные';

type MyComponentProps = {
  commercialRegister: CommercialRegister;
};

const MyCommercialRegister: React.FC<MyComponentProps> = ({ commercialRegister }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  return (
    <CommercialRegisterContainer>
      <CommercialRegisterTitle
        firstTitle={commercialRegister.type_retail_goods}
        secondTitle={commercialRegister.object_type}
        fromDate={commercialRegister.from_dttm}
        toDate={commercialRegister.to_dttm}
      />
      <S.StyledTable>
        <tbody>
          <TableLine name={'Населенный пункт торгового объекта'} field={commercialRegister.object_address_settlement} />
          <TableLine name={'Классы товаров'} field={commercialRegister.goods_classes} />
          <TableLine name={'Дата включения в реестр'} field={commercialRegister.from_dttm} isDate={true} />
          {isCollapsed && (
            <>
              <TableLine name={'Дата исключения из реестра'} field={commercialRegister.to_dttm} isDate={true} />
              <TableLine name={'Регистрационный номер в Торговом реестре'} field={commercialRegister.reg_num} />
              <TableLine name={'Тип объекта'} field={commercialRegister.object_type} />
              <TableLine name={'Название торговой сети'} field={commercialRegister.trade_network_name} />
              <TableLine name={'Вид торгового объекта по формату'} field={commercialRegister.type_retail_format} />
              <TableLine name={'Вид объекта по месту расположения'} field={commercialRegister.object_type_location} />
              <TableLine name={'Фирменный торговый объект'} field={commercialRegister.brand_retail} />
              <TableLine name={'Тип торгового объекта'} field={commercialRegister.type_retail} />
              <TableLine name={'Торговая площадь торгового объекта'} field={commercialRegister.trade_area} />
              <TableLine name={'Тип объекта общественного питания'} field={commercialRegister.type_catering} />
              <TableLine
                name={'Количество мест в объекте общественного питания'}
                field={commercialRegister.number_places_catering}
              />
              <TableLine
                name={'Количество общедоступных мест в объекте общественного питания'}
                field={commercialRegister.number_public_places_catering}
              />
              <TableLine
                name={'Специализация торгового центра'}
                field={commercialRegister.shopping_center_specialization}
              />
              <TableLine name={'Тип рынка'} field={commercialRegister.market_type} />
              <TableLine name={'Специализация рынка'} field={commercialRegister.market_specialization} />
              <TableLine
                name={'Формы розничной торговли, осуществляемые без использования торгового объекта'}
                field={commercialRegister.forms_retail}
              />
              <TableLine name={'Полный адрес торгового объекта'} field={commercialRegister.object_address_full} />
              <TableLine name={'Область торгового объекта'} field={commercialRegister.object_address_region} />
              <TableLine name={'Район торгового объекта'} field={commercialRegister.object_address_district} />
              <TableLine
                name={'Населенный пункт торгового объекта'}
                field={commercialRegister.object_address_settlement}
              />
              <TableLine name={'Группы товаров'} field={commercialRegister.product_groups} />
              <TableLine name={'Подгруппы товаров'} field={commercialRegister.product_subgroups} />
              <TableLine name={'Вид торговли "розничная торговля"'} field={commercialRegister.type_retail_trade} />
              <TableLine name={'Вид торговли "оптовая торговля"'} field={commercialRegister.type_wholesale_trade} />
            </>
          )}
        </tbody>
      </S.StyledTable>
      <span onClick={() => handleClick()}>
        <ButtonShow>{isCollapsed ? <>{textCollapseButton}</> : <>{textCollapseButton}</>}</ButtonShow>
      </span>
    </CommercialRegisterContainer>
  );
};

export default MyCommercialRegister;

const CommercialRegisterContainer = styled.div`
  width: 100%;
  margin-top: 1.835rem;
`;
