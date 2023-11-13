import React from 'react';
import { CommercialRegister } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  commercialRegister: CommercialRegister;
};

const SingleCommercialRegister: React.FC<MyComponentProps> = ({ commercialRegister }) => {
  return (
    <>
      <DataField name="Дата включения в реестр" content={commercialRegister.from_dttm} />
      <DataField name="Регистрационный номер в Торговом реестре" content={commercialRegister.reg_num} />
      <DataField name="Тип объекта" content={commercialRegister.object_type} />
      <DataField name="Название торговой сети" content={commercialRegister.trade_network_name} />
      <DataField name="Вид торгового объекта по формату" content={commercialRegister.type_retail_format} />
      <DataField
        name="Вид торгового объекта по ассортименту реализуемых товаров"
        content={commercialRegister.type_retail_goods}
      />
      <DataField name="Вид объекта по месту расположения" content={commercialRegister.object_type_location} />
      <DataField name="Фирменный торговый объект" content={commercialRegister.brand_retail} />
      <DataField name="Тип торгового объекта" content={commercialRegister.type_retail} />
      <DataField name="Торговая площадь торгового объекта" content={commercialRegister.trade_area} />
      <DataField name="Тип объекта общественного питания" content={commercialRegister.type_catering} />
      <DataField
        name="Количество мест в объекте общественного питания"
        content={commercialRegister.number_places_catering}
      />
      <DataField
        name="Количество общедоступных мест в объекте общественного питания"
        content={commercialRegister.number_public_places_catering}
      />
      <DataField name="Специализация торгового центра" content={commercialRegister.shopping_center_specialization} />
      <DataField name="Тип рынка" content={commercialRegister.market_type} />
      <DataField name="Специализация рынка" content={commercialRegister.market_specialization} />
      <DataField
        name="Формы розничной торговли, осуществляемые без использования торгового объекта"
        content={commercialRegister.forms_retail}
      />
      <DataField name="Полный адрес торгового объекта" content={commercialRegister.object_address_full} />
      <DataField name="Область торгового объекта" content={commercialRegister.object_address_region} />
      <DataField name="Район торгового объекта" content={commercialRegister.object_address_district} />
      <DataField name="Населенный пункт торгового объекта" content={commercialRegister.object_address_settlement} />
      <DataField name="Классы товаров" content={commercialRegister.goods_classes} />
      <DataField name="Группы товаров" content={commercialRegister.product_groups} />
      <DataField name="Подгруппы товаров" content={commercialRegister.product_subgroups} />
      <DataField name="Вид торговли - розничная торговля" content={commercialRegister.type_retail_trade} />
      <DataField name="Вид торговли - оптовая торговля" content={commercialRegister.type_wholesale_trade} />
      <DataField name="Дата исключения из реестра" content={commercialRegister.to_dttm} />
    </>
  );
};

export default SingleCommercialRegister;
