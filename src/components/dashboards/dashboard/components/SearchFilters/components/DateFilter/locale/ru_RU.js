import _extends from '@babel/runtime/helpers/esm/extends';

/** Created by Andrey Gayvoronsky on 13/04/16. */
import CalendarLocale from 'rc-picker/es/locale/ru_RU';
import TimePickerLocale from 'antd/es/time-picker/locale/ru_RU';

var locale = {
  lang: _extends(
    {
      placeholder: 'Выберите дату',
      yearPlaceholder: 'Выберите год',
      quarterPlaceholder: 'Выберите квартал',
      monthPlaceholder: 'Выберите месяц',
      weekPlaceholder: 'Выберите неделю',
      rangePlaceholder: ['Начальная дата', 'Конечная дата'],
      rangeYearPlaceholder: ['Начальный год', 'Год окончания'],
      rangeMonthPlaceholder: ['Начальный месяц', 'Конечный месяц'],
      rangeWeekPlaceholder: ['Начальная неделя', 'Конечная неделя'],
      shortWeekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      shortMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    },
    CalendarLocale,
  ),
  timePickerLocale: _extends({}, TimePickerLocale),
};

export default locale;
