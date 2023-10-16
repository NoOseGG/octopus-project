import React from 'react';
import { Card } from 'antd';
import { CommercialRegister } from '@app/store/types/Subject';
import CommercialField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectCommercialRegister/CommercialField';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  commercialRegisters: CommercialRegister[];
};

const SubjectCommercialRegister: React.FC<MyComponentProps> = ({ commercialRegisters }) => {
  return (
    <Card title={<Title>Данные из торгового реестра</Title>} style={{ display: 'grid', marginTop: 10 }}>
      {Boolean(commercialRegisters[0].from_dttm) && (
        <CommercialField name={'Дата включения в реестр'} content={formatDate(commercialRegisters[0].from_dttm)} />
      )}
      {Boolean(commercialRegisters[0].reg_num) && (
        <CommercialField name={'Регистрационный номер в Торговом реестре'} content={commercialRegisters[0].reg_num} />
      )}
      {Boolean(commercialRegisters[0].object_type) && (
        <CommercialField name={'Тип объекта'} content={commercialRegisters[0].object_type} />
      )}
      {Boolean(commercialRegisters[0].trade_network_name) && (
        <CommercialField name={'Название торговой сети'} content={commercialRegisters[0].trade_network_name} />
      )}
      {Boolean(commercialRegisters[0].type_retail_format) && (
        <CommercialField
          name={'Вид торгового объекта по формату'}
          content={commercialRegisters[0].type_retail_format}
        />
      )}
      {Boolean(commercialRegisters[0].type_retail_goods) && (
        <CommercialField
          name={'Вид торгового объекта по ассортименту реализуемых товаров'}
          content={commercialRegisters[0].type_retail_goods}
        />
      )}
      {Boolean(commercialRegisters[0].object_type_location) && (
        <CommercialField
          name={'Вид объекта по месту расположения'}
          content={commercialRegisters[0].object_type_location}
        />
      )}
      {Boolean(commercialRegisters[0].brand_retail) && (
        <CommercialField name={'Фирменный торговый объект'} content={commercialRegisters[0].brand_retail} />
      )}
      {Boolean(commercialRegisters[0].type_retail) && (
        <CommercialField name={'Тип торгового объекта'} content={commercialRegisters[0].type_retail} />
      )}
      {Boolean(commercialRegisters[0].trade_area) && (
        <CommercialField name={'Торговая площадь торгового объекта'} content={commercialRegisters[0].trade_area} />
      )}
      {Boolean(commercialRegisters[0].type_catering) && (
        <CommercialField name={'Тип объекта общественного питания'} content={commercialRegisters[0].type_catering} />
      )}
      {Boolean(commercialRegisters[0].number_places_catering) && (
        <CommercialField
          name={'Количество мест в объекте общественного питания'}
          content={commercialRegisters[0].number_places_catering}
        />
      )}
      {Boolean(commercialRegisters[0].number_public_places_catering) && (
        <CommercialField
          name={'Количество общедоступных мест в объекте общественного питания'}
          content={commercialRegisters[0].number_public_places_catering}
        />
      )}
      {Boolean(commercialRegisters[0].shopping_center_specialization) && (
        <CommercialField
          name={'Специализация торгового центра'}
          content={commercialRegisters[0].shopping_center_specialization}
        />
      )}
      {Boolean(commercialRegisters[0].market_type) && (
        <CommercialField name={'Тип рынка'} content={commercialRegisters[0].market_type} />
      )}
      {Boolean(commercialRegisters[0].market_specialization) && (
        <CommercialField name={'Специализация рынка'} content={commercialRegisters[0].market_specialization} />
      )}
      {Boolean(commercialRegisters[0].forms_retail) && (
        <CommercialField
          name={'Формы розничной торговли, осуществляемые без использования торгового объекта'}
          content={commercialRegisters[0].forms_retail}
        />
      )}
      {Boolean(commercialRegisters[0].object_address_full) && (
        <CommercialField name={'Полный адрес торгового объекта'} content={commercialRegisters[0].object_address_full} />
      )}
      {Boolean(commercialRegisters[0].object_address_region) && (
        <CommercialField name={'Область торгового объекта'} content={commercialRegisters[0].object_address_region} />
      )}
      {Boolean(commercialRegisters[0].object_address_district) && (
        <CommercialField name={'Район торгового объекта'} content={commercialRegisters[0].object_address_district} />
      )}
      {Boolean(commercialRegisters[0].object_address_settlement) && (
        <CommercialField
          name={'Населенный пункт торгового объекта'}
          content={commercialRegisters[0].object_address_settlement}
        />
      )}
      {Boolean(commercialRegisters[0].goods_classes) && (
        <CommercialField name={'Классы товаров'} content={commercialRegisters[0].goods_classes} />
      )}
      {Boolean(commercialRegisters[0].product_groups) && (
        <CommercialField name={'Группы товаров'} content={commercialRegisters[0].product_groups} />
      )}
      {Boolean(commercialRegisters[0].product_subgroups) && (
        <CommercialField name={'Подгруппы товаров'} content={commercialRegisters[0].product_subgroups} />
      )}
      {Boolean(commercialRegisters[0].type_retail_trade) && (
        <CommercialField name={'Вид торговли"розничная торговля"'} content={commercialRegisters[0].type_retail_trade} />
      )}
      {Boolean(commercialRegisters[0].type_wholesale_trade) && (
        <CommercialField
          name={'Вид торговли "оптовая торговля"'}
          content={commercialRegisters[0].type_wholesale_trade}
        />
      )}
      {Boolean(commercialRegisters[0].to_dttm) && (
        <CommercialField name={'Дата исключения из реестра'} content={formatDate(commercialRegisters[0].to_dttm)} />
      )}
    </Card>
  );
};

export default SubjectCommercialRegister;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;
