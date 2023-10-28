import React from 'react';
import styled from 'styled-components';
import MarkerList, {
  MarkerType,
} from '@app/components/dashboards/changelog-dashboard/ChangeLog/components/MarkerList/MarkerList';

const ChangeLog: React.FC = () => {
  return (
    <Container>
      <Title>Журнал изменений</Title>

      <Version>0.1.4</Version>
      <VersionDate>28.10.2023</VersionDate>
      <ul>
        <MarkerList marker={MarkerType.ADD}>Добавлен вывод всех данных по закупкам (Gias).</MarkerList>
        <MarkerList marker={MarkerType.ADD}>Добавлено отображние дат при выводе все названий.</MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлены уведомления при ошибках поиска, регистрации и авторизации.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>Добавлена новая страница с дашбордами.</MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>Исправлено отображения названия таблицы все веб сайтов.</MarkerList>
      </ul>

      <Version>0.1.3</Version>
      <VersionDate>24.10.2023</VersionDate>
      <ul>
        <MarkerList marker={MarkerType.ADD}>Добавлено поле &quot;ключевые навыки&quot; в вакансии.</MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Исправлен баг, когда в некоторых случаях не отображались контакты.
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>Исправлены ошибки в журнале изменений.</MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Исправлено визуальное отображение маркеров в журнале изменений.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена пагинация и отображение данных:
          <ul style={{ paddingLeft: 20 }}>
            <li>о налоговой инспекции;</li>
            <li>о способах создания / ликвидации;</li>
            <li>о статусе;</li>
            <li>о видах деятельности;</li>
            <li>о стране регистрации.</li>
          </ul>
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлены данные:
          <ul style={{ paddingLeft: 20 }}>
            <li>по закупкам (IceTrade);</li>
            <li>о государственных органах;</li>
            <li>о включении в перечень повышенного риска правонарушений в экономической сфере.</li>
          </ul>
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Исправлена ошибка неправильного отображения списка субъектов на тёмной теме.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлены все полные и сокращенные названия при наведении на иконку.
        </MarkerList>
      </ul>

      <Version>0.1.2</Version>
      <VersionDate>22.10.2023</VersionDate>
      <ul>
        <MarkerList marker={MarkerType.CHANGE}>
          Изменено окно отображения всех адресов электронной почты, веб-сайтов и адресов.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена функция перехода на веб-сайт в новой вкладке при нажатии.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена возможность отображения всех данных из торгового реестра по нажатию кнопки.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена возможность отображения всех данных о проверках субъектов государственными органами по нажатию
          кнопки.
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Изменен размер меню навигации при отображении всех телефонов, адресов электронной почты и веб-сайтов.
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Исправлена некорректная отрисовка поля в &quot;Данных о статусе&quot;.
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>Исправлена ошибка, когда пустое поле не отображалось.</MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Исправлена ошибка, которая препятствовала поиску при наличии лишних пробелов в начале или конце строки.
        </MarkerList>
        <MarkerList marker={MarkerType.DELETE}>Удалены подсказки (тултипы) в таблице вакансий.</MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Изменена фоновая картинка на странице регистрации и авторизации.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена задержка (debounce) для предотвращения дублирующих запросов на сервер при вводе в строку поиска.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена пагинация и возможность отображения всех данных об изменениях, внесенных в учредительный документ.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена пагинация и возможность отображения всех данных об организационно-правовой форме.
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>Изменено отображение данных о закупках (IceTrade).</MarkerList>
      </ul>

      <Version>0.1.1</Version>
      <VersionDate>16.10.2023</VersionDate>
      <ul>
        <MarkerList marker={MarkerType.CHANGE}>
          Исправлена ошибка, когда приложение получало ошибку при обновлении страницы информации о субъекте.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена в профиль о субъекте информация о &quot;Сведениях об изменениях, внесенных в учредительный
          документ&quot;.
        </MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена сортировка в информацию по вакансиям по &quot;Названию вакансии&quot; и &quot;Режиму работы&quot;.
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>
          Исправлен вывод данных, связанных с датой, в читабельный вид.
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>Изменено окно отображения всех телефонов.</MarkerList>
      </ul>

      <Version>0.1.0</Version>
      <VersionDate>13.10.2023</VersionDate>
      <ul>
        <MarkerList marker={MarkerType.ADD}>
          Добавлена таблица с закупками IceTrade, с диагромой процентов успешных закупок.
        </MarkerList>
        <MarkerList marker={MarkerType.DELETE}>Удалено поле &quot;Помни меня&quot; в форме авторизации.</MarkerList>
        <MarkerList marker={MarkerType.ADD}>
          Добавленны данные:
          <ul style={{ paddingLeft: 20 }}>
            <li>о статусе;</li>
            <li>о способах создания / ликвидации;</li>
            <li>о виде деятельности;</li>
            <li>о стране;</li>
            <li>о ГИАС;</li>
            <li>о проверках субъектов государственными органами;</li>
          </ul>
        </MarkerList>
        <MarkerList marker={MarkerType.CHANGE}>Изменено описание в форме регистрации.</MarkerList>
      </ul>
    </Container>
  );
};

export default ChangeLog;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 26px;
`;

const Version = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const VersionDate = styled('code')`
  margin-bottom: 20px;
`;
