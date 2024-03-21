import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import { getNameMonthByNumber } from '@app/utils/utils';
import React from 'react';

const getColumn = (title: string, field: string, width: string, isMonth = false) => {
  let renderText;
  if (isMonth) {
    renderText = (text: string) => {
      return <Content textAlign={'center'}>{getNameMonthByNumber(parseInt(text, 10))}</Content>;
    };
  } else {
    renderText = (text: string) => {
      return <Content textAlign={'center'}>{text}</Content>;
    };
  }

  return {
    title: title,
    dataIndex: field,
    width: width,
    key: field,
    render: renderText,
  };
};

export const getColumnsJumpSettlement = () => {
  return [
    getColumn('Месяц', 'reg_month', '10%', true),
    getColumn('Год', 'reg_year', '10%'),
    getColumn('Населенный пункт', 'settlement', '60%'),
    getColumn('Количество регистраций', 'count_reg', '10%'),
    getColumn('Среднее количество регистраций', 'avg_reg', '10%'),
  ];
};

export const getColumnsJumpTypeActivity = () => {
  return [
    getColumn('Месяц', 'reg_month', '10%', true),
    getColumn('Год', 'reg_year', '10%'),
    getColumn('Вид деятельности', 'type_activity_name', '60%'),
    getColumn('Количество регистраций', 'count_reg', '10%'),
    getColumn('Среднее количество регистраций', 'avg_reg', '10%'),
  ];
};
