import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLineCollapsed from '@app/components/dashboards/profile-info/components/Fields/TableLineCollapsed/TableLineCollapsed';

const Contacts: React.FC = () => {
  const webSites = useAppSelector((state) => state.searchProfile.profile.web_sites);
  const emails = useAppSelector((state) => state.searchProfile.profile.emails);
  const phones = useAppSelector((state) => state.searchProfile.profile.phones);

  const newWebSites = webSites?.map((item) => item.url).filter((url) => url !== null) as string[];
  const newEmails = emails?.map((item) => item.email).filter((email) => email !== null) as string[];
  const newPhones = phones
    ?.map((item) => item.phone_number)
    .filter((phone_number) => phone_number !== null) as string[];

  console.log(`url ${newEmails.toString()}`);

  return (
    <>
      <S.StyledTable>
        <thead>
          <tr>
            <td>
              <S.Title>Контакты</S.Title>
            </td>
          </tr>
        </thead>
        <tbody>
          <TableLineCollapsed name={'Сайты'} fields={newWebSites} />
          <TableLineCollapsed name={'Емайлы'} fields={newEmails} />
          <TableLineCollapsed name={'Телефоны'} fields={newPhones} />
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default Contacts;
