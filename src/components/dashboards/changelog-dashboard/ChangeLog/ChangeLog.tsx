import React from 'react';
import styled from 'styled-components';

const ChangeLog: React.FC = () => {
  return (
    <Container>
      <Title>Журнал изменений</Title>

      <Version>1.0.2</Version>
      <VersionDate>16.10.2023</VersionDate>
      <ul>
        <li>Исправлена ошибка, когда приложение получало ошибку при обновлении страницы информации о субъекте.</li>
        <li>
          Добавлена в профиль о субъекте информация о &quot;Сведениях об изменениях, внесенных в учредительный
          документ&quot;.
        </li>
        <li>
          Добавлена сортировка в информацию по вакансиям по &quot;Названию вакансии&quot; и &quot;Режиму работы&quot;.
        </li>
        <li>Исправлен вывод данных связанных с датой в читабельный вид.</li>
        <li>Переработано окно отображения всех телефонов.</li>
      </ul>

      <Version>1.0.1</Version>
      <VersionDate>13.10.2023</VersionDate>
      <ul>
        <li>Добавлена таблица с закупками IceTrade, с диагромой процентов успешных закупок.</li>
        <li>Удалено поле &quot;Помни меня&quot; в форме авторизации.</li>
        <li>
          Добавленны данные:
          <ul style={{ paddingLeft: 20 }}>
            <li>о статусе</li>
            <li>о способах создания/ликвидации</li>
            <li>о виде деятельности</li>
            <li>о стране</li>
            <li>о ГИАС</li>
            <li>о проверках субъектов государственными органами</li>
          </ul>
        </li>
        <li>В форме регистрации изменено описание.</li>
      </ul>
    </Container>
  );
};

export default ChangeLog;

const Container = styled.div`
  width: 100%;
  height: 100%;
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
