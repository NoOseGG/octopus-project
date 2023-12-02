import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLineArray from '@app/components/dashboards/profile-info/components/Fields/TableLineArray/TableLineArray';

const Contacts: React.FC = () => {
  const webSites = useAppSelector((state) => state.searchProfile.profile.web_sites);
  const emails = useAppSelector((state) => state.searchProfile.profile.emails);

  const newWebSites = webSites?.map((item) => item.url).filter((url) => url !== null) as string[];
  const newEmails = emails?.map((item) => item.email).filter((email) => email !== null) as string[];

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
          <TableLineArray name={'Сайты'} fields={newWebSites} />
          <TableLineArray name={'Емайлы'} fields={newEmails} />
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default Contacts;
