import { Col, Row } from 'antd';
import { NotificationType } from '@app/components/common/Notification/Notification';
import { CurrencyType } from '@app/interfaces/interfaces';
import { Priority } from '@app//constants/enums/priorities';
import { ReactComponent as ETHIcon } from '@app/assets/icons/eth.svg';
import { ReactComponent as BTCIcon } from '@app/assets/icons/btc.svg';
import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';
import { DASH } from '@app/constants/enums/Dashboards';
import React from 'react';
import { EntityType } from '@app/constants/Constants';
import { ColumnChartMonthObject } from '@app/store/types/dashboard/ColumnChartMonthTypes';

export const camelize = (string: string): string => {
  return string
    .split(' ')
    .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

export const getCurrencyPrice = (
  price: number | string,
  currency: CurrencyType,
  isIcon = true,
): string | React.ReactNode => {
  switch (currency) {
    case 'USD': {
      return isIcon ? `$${price}` : `${price} USD`;
    }

    case 'BTC': {
      return isIcon ? (
        <Row align="middle" gutter={[8, 8]}>
          <Col style={{ display: 'flex' }}>
            <BTCIcon />
          </Col>

          <Col>{price}</Col>
        </Row>
      ) : (
        `${price} BTC`
      );
    }

    case 'ETH': {
      return isIcon ? (
        <Row align="middle" gutter={[8, 8]}>
          <Col style={{ display: 'flex' }}>
            <ETHIcon />
          </Col>

          <Col>{price}</Col>
        </Row>
      ) : (
        `${price} ETH`
      );
    }

    default: {
      return isIcon ? `$${price}` : `${price} USD`;
    }
  }
};

type MarkArea = {
  xAxis: number;
};

export const getMarkAreaData = (data: string[] | number[]): MarkArea[][] =>
  data.map((el, index) => [
    {
      xAxis: 2 * index,
    },
    {
      xAxis: 2 * index + 1,
    },
  ]);

export const capitalize = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`;

export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};

export const getDifference = (value: number, prevValue: number): string | null =>
  prevValue !== 0 ? `${((Math.abs(value - prevValue) / prevValue) * 100).toFixed(0)}%` : '100%';

export const normalizeProp = (prop: string | number | [number, number]): string =>
  typeof prop === 'number' ? `${prop}px` : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString();

export const defineColorByPriority = (priority: Priority): string => {
  switch (priority) {
    case Priority.INFO:
      return 'var(--primary-color)';
    case Priority.LOW:
      return 'var(--success-color)';
    case Priority.MEDIUM:
      return 'var(--warning-color)';
    case Priority.HIGH:
      return 'var(--error-color)';
    default:
      return 'var(--success-color)';
  }
};

export const defineColorBySeverity = (severity: NotificationType | undefined, rgb = false): string => {
  const postfix = rgb ? 'rgb-color' : 'color';
  switch (severity) {
    case 'error':
    case 'warning':
    case 'success':
      return `var(--${severity}-${postfix})`;
    case 'info':
    default:
      return `var(--primary-${postfix})`;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeBy = (a: any[], b: any[], key: string): any[] =>
  a.filter((elem) => !b.find((subElem) => subElem[key] === elem[key])).concat(b);

export const getSmoothRandom = (factor: number, start: number): number => {
  const halfEnvelope = 1 / factor / 2;
  const max = Math.min(1, start + halfEnvelope);
  const min = Math.max(0, start - halfEnvelope);

  return Math.random() * (max - min) + min;
};

export const shadeColor = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};

export const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return {
      h,
      s,
      l,
    };
  } else {
    throw new Error('Non valid HEX color');
  }
};

// My Function

export const dateTransformate = (date: string): string | undefined => {
  const parts = date.split('-');
  if (parts.length !== 3) {
    console.log('Неверный формат даты');
    return;
  }
  const [year, month, day] = parts;
  return `${day}.${month}.${year}`;
};

export const dateTransformForRegistration = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц начинается с 0
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export function formatDate(dateString: string | null | undefined, isReverse = false): string | null {
  if (dateString === null || dateString === undefined) {
    return ''; // Если дата равна null, вернем тоже null
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return null; // Если дата некорректная, вернем null
  }

  const day = date.getDate().toString().padStart(2, '0'); // Преобразуем день
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Преобразуем месяц (с учетом того, что месяцы в JavaScript начинаются с 0)
  const year = date.getFullYear().toString(); // Преобразуем год

  if (isReverse) return `${year}.${month}.${day}`;
  return `${day}.${month}.${year}`;
}

export function formatDateWithTime(inputDate: string | null): string {
  if (inputDate === null) {
    return '';
  }

  const dateObject = new Date(inputDate);

  // Функция для добавления ведущего нуля к числам < 10
  const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  return (
    `${dateObject.getFullYear()}.${padZero(dateObject.getMonth() + 1)}.${padZero(dateObject.getDate())} ` +
    `${padZero(dateObject.getHours())}:${padZero(dateObject.getMinutes())}:${padZero(dateObject.getSeconds())}`
  );
}

// export function formatPhoneNumber(phoneNumber: string): string {
//   if (!phoneNumber.match(/^\d{12}$/)) {
//     return phoneNumber;
//   }
//
//   return phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1-$2-$3-$4-$5');
// }

export const getLastYear = (): string => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  const year = currentDate.getFullYear();

  return year.toString();
};

export const getCurrentYear = (): string => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear());
  const year = currentDate.getFullYear();

  return year.toString();
};

export const getCurrentDate = (isReverse = false): string => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // +1, так как месяцы начинаются с 0
  const day = String(currentDate.getDate()).padStart(2, '0');

  if (isReverse) return `${day}-${month}-${year}`;
  return `${year}-${month}-${day}`;
};

export const getDateLastYear = (previousYear = 1, isReverse = false): string => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - previousYear);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
  const day = String(currentDate.getDate()).padStart(2, '0');

  if (isReverse) return `${day}-${month}-${year}`;
  return `${year}-${month}-${day}`;
};

export const getYearFromDate = (date: string | null): string => {
  if (date === null) return 'Без даты';
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();

  return `${year}`;
};

export const getDateLastQuarter = (): string => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 3);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getDateLastMonth = (): string => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getPastMonth = (count: number): string => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - count);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0

  return `${year}-${month}`;
};

export const getPastMonthFromDate = (count: number, date: Date): string => {
  date.setMonth(date.getMonth() - count);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getNameMonthByNumber = (number: number): string => {
  switch (number) {
    case 1:
      return 'Январь';
    case 2:
      return 'Февраль';
    case 3:
      return 'Март';
    case 4:
      return 'Апрель';
    case 5:
      return 'Май';
    case 6:
      return 'Июнь';
    case 7:
      return 'Июль';
    case 8:
      return 'Август';
    case 9:
      return 'Сентябрь';
    case 10:
      return 'Октябрь';
    case 11:
      return 'Ноябрь';
    case 12:
      return 'Декабрь';
    default:
      return 'Неизвестно';
  }
};

export const sortDataByMonth = (data: ColumnChartMonthObject[]): ColumnChartMonthObject[] => {
  data.sort((a, b) => a.type - b.type);

  while (data.length > 1 && data[0].type !== undefined && data[0].type < 6) {
    const first = data.shift();
    if (first !== undefined) {
      data.push(first);
    }
  }

  return data;
};

export const constructorUrlForDashboard = (
  base: string,
  filters: FiltersType,
  count: boolean,
  date: boolean,
): string => {
  let url = base;
  if (Boolean(filters.settlements?.length) && filters.settlements !== null)
    url += DASH.ADDRESS_SETTLEMENT_ICONTAINS(filters.settlements);
  if (Boolean(filters.districts?.length) && filters.districts !== null)
    url += DASH.ADDRESS_DISTRICT_ICONTAINS(filters.districts);
  if (Boolean(filters.regions?.length) && filters.regions !== null)
    url += DASH.ADDRESS_REGION_ICONTAINS(filters.regions);
  if (Boolean(filters.taxOffices?.length) && filters.taxOffices !== null)
    url += DASH.TAX_OFFICES_ICONTAINS(filters.taxOffices);
  if (filters.typeActivities !== null) url += DASH.TYPE_ACTIVITY(filters.typeActivities);
  if (filters.codeActivities !== null) url += DASH.CODE_ACTIVITY(filters.codeActivities);
  if (date) {
    if (filters.fromDate !== null) url += DASH.DATE_AFTER(filters.fromDate);
    if (filters.toDate !== null) url += DASH.DATE_BEFORE(filters.toDate);
  }
  if (count) url += DASH.COUNT;

  return url;
};

export const getColorForBadge = (risk: string | null): string => {
  switch (risk) {
    case 'Высокий риск':
      return 'red';
    case 'Средний риск':
      return 'yellow';
    case 'Низкий риск':
      return 'green';
    default:
      return 'white';
  }
};

// Dashboard

export const getEntityName = (entityType: EntityType): string => {
  switch (entityType) {
    case EntityType.LEGAl_ENTITY:
      return 'компании';
    case EntityType.SOLE_TRADE:
      return 'ИП';
  }
};

export function formatNumberWithCommas(number: number | undefined): string {
  if (number === undefined) return '';
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function formatPhoneNumber(phoneNumber: string): string {
  // Удаляем все символы, кроме цифр
  const cleaned = phoneNumber.replace(/\D/g, '');

  // Проверяем длину номера телефона
  if (cleaned.length >= 7) {
    // Форматируем номер телефона
    const countryCode = cleaned.slice(0, 3);
    const operatorCode = cleaned.slice(3, 5);
    let mainPart = cleaned.slice(5);

    let formattedMainPart = '';
    if (mainPart.length <= 6) {
      for (let i = 0; i < mainPart.length; i += 2) {
        formattedMainPart += mainPart.slice(i, i + 2);
        if (i + 2 < mainPart.length) {
          formattedMainPart += '-';
        }
      }
    } else {
      formattedMainPart += mainPart.slice(0, 3) + '-';
      mainPart = mainPart.slice(3);
      for (let i = 0; i < mainPart.length; i += 2) {
        formattedMainPart += mainPart.slice(i, i + 2);
        if (i + 2 < mainPart.length) {
          formattedMainPart += '-';
        }
      }
    }

    return `+${countryCode}(${operatorCode}) ${formattedMainPart}`;
  } else {
    // Если длина номера неверная, возвращаем исходную строку
    return phoneNumber;
  }
}

// DASH.ORDERING_AGG('company_date_registration__year')
