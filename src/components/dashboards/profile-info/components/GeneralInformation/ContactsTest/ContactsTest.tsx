import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import LineTextCollapsed from '@app/components/dashboards/profile-info/components/components/Lines/LineTextCollapsed';

const ContactsTest: React.FC = () => {
  const webSites = useAppSelector((state) => state.searchProfile.profile.web_sites);
  const emails = useAppSelector((state) => state.searchProfile.profile.emails);
  const phones = useAppSelector((state) => state.searchProfile.profile.phones);

  const newWebSites = webSites?.map((item) => item.url).filter((url) => url !== null) as string[];
  const newEmails = emails?.map((item) => item.email).filter((email) => email !== null) as string[];
  const newPhones = phones
    ?.map((item) => item.phone_number)
    .filter((phone_number) => phone_number !== null) as string[];

  const contactsLength = newWebSites.length + newEmails.length + newPhones.length;

  return (
    <>
      {Boolean(contactsLength) && (
        <>
          <S.Title>Контактная информация</S.Title>
          <S.Container>
            <LineTextCollapsed name={'Сайт'} contents={newWebSites} isCopyable={true} isLink={true} />
            <LineTextCollapsed name={'Электронная почта'} contents={newEmails} isCopyable={true} />
            <LineTextCollapsed
              name={'Телефон'}
              contents={newPhones}
              isCopyable={true}
              isPhone={true}
              // isContact={true}
            />
            <S.MyDivider />
          </S.Container>
        </>
      )}
    </>
  );
};

export default ContactsTest;
