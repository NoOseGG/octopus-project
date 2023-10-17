import React from 'react';
import { CommercialRegister } from '@app/store/types/Subject';
import CommercialField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectCommercialRegister/components/CommercialField';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  commercialRegister: CommercialRegister;
};

const SingleCommercialRegister: React.FC<MyComponentProps> = ({ commercialRegister }) => {
  return (
    <>
      {Boolean(commercialRegister.from_dttm) && (
        <CommercialField name={'Дата включения в реестр'} content={formatDate(commercialRegister.from_dttm)} />
      )}
      {Boolean(commercialRegister.reg_num) && (
        <CommercialField name={'Регистрационный номер в Торговом реестре'} content={commercialRegister.reg_num} />
      )}
      {Boolean(commercialRegister.object_type) && (
        <CommercialField name={'Тип объекта'} content={commercialRegister.object_type} />
      )}
      {Boolean(commercialRegister.trade_network_name) && (
        <CommercialField name={'Название торговой сети'} content={commercialRegister.trade_network_name} />
      )}
      {Boolean(commercialRegister.type_retail_format) && (
        <CommercialField name={'Вид торгового объекта по формату'} content={commercialRegister.type_retail_format} />
      )}
      {Boolean(commercialRegister.type_retail_goods) && (
        <CommercialField
          name={'Вид торгового объекта по ассортименту реализуемых товаров'}
          content={commercialRegister.type_retail_goods}
        />
      )}
      {Boolean(commercialRegister.object_type_location) && (
        <CommercialField name={'Вид объекта по месту расположения'} content={commercialRegister.object_type_location} />
      )}
      {Boolean(commercialRegister.brand_retail) && (
        <CommercialField name={'Фирменный торговый объект'} content={commercialRegister.brand_retail} />
      )}
      {Boolean(commercialRegister.type_retail) && (
        <CommercialField name={'Тип торгового объекта'} content={commercialRegister.type_retail} />
      )}
      {Boolean(commercialRegister.trade_area) && (
        <CommercialField name={'Торговая площадь торгового объекта'} content={commercialRegister.trade_area} />
      )}
      {Boolean(commercialRegister.type_catering) && (
        <CommercialField name={'Тип объекта общественного питания'} content={commercialRegister.type_catering} />
      )}
      {Boolean(commercialRegister.number_places_catering) && (
        <CommercialField
          name={'Количество мест в объекте общественного питания'}
          content={commercialRegister.number_places_catering}
        />
      )}
      {Boolean(commercialRegister.number_public_places_catering) && (
        <CommercialField
          name={'Количество общедоступных мест в объекте общественного питания'}
          content={commercialRegister.number_public_places_catering}
        />
      )}
      {Boolean(commercialRegister.shopping_center_specialization) && (
        <CommercialField
          name={'Специализация торгового центра'}
          content={commercialRegister.shopping_center_specialization}
        />
      )}
      {Boolean(commercialRegister.market_type) && (
        <CommercialField name={'Тип рынка'} content={commercialRegister.market_type} />
      )}
      {Boolean(commercialRegister.market_specialization) && (
        <CommercialField name={'Специализация рынка'} content={commercialRegister.market_specialization} />
      )}
      {Boolean(commercialRegister.forms_retail) && (
        <CommercialField
          name={'Формы розничной торговли, осуществляемые без использования торгового объекта'}
          content={commercialRegister.forms_retail}
        />
      )}
      {Boolean(commercialRegister.object_address_full) && (
        <CommercialField name={'Полный адрес торгового объекта'} content={commercialRegister.object_address_full} />
      )}
      {Boolean(commercialRegister.object_address_region) && (
        <CommercialField name={'Область торгового объекта'} content={commercialRegister.object_address_region} />
      )}
      {Boolean(commercialRegister.object_address_district) && (
        <CommercialField name={'Район торгового объекта'} content={commercialRegister.object_address_district} />
      )}
      {Boolean(commercialRegister.object_address_settlement) && (
        <CommercialField
          name={'Населенный пункт торгового объекта'}
          content={commercialRegister.object_address_settlement}
        />
      )}
      {Boolean(commercialRegister.goods_classes) && (
        <CommercialField name={'Классы товаров'} content={commercialRegister.goods_classes} />
      )}
      {Boolean(commercialRegister.product_groups) && (
        <CommercialField name={'Группы товаров'} content={commercialRegister.product_groups} />
      )}
      {Boolean(commercialRegister.product_subgroups) && (
        <CommercialField name={'Подгруппы товаров'} content={commercialRegister.product_subgroups} />
      )}
      {Boolean(commercialRegister.type_retail_trade) && (
        <CommercialField name={'Вид торговли"розничная торговля"'} content={commercialRegister.type_retail_trade} />
      )}
      {Boolean(commercialRegister.type_wholesale_trade) && (
        <CommercialField name={'Вид торговли "оптовая торговля"'} content={commercialRegister.type_wholesale_trade} />
      )}
      {Boolean(commercialRegister.to_dttm) && (
        <CommercialField name={'Дата исключения из реестра'} content={formatDate(commercialRegister.to_dttm)} />
      )}
    </>
  );
};

export default SingleCommercialRegister;
