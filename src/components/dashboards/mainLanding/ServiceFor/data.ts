import smallBusiness from '../../../../assets/images/landing/ServiceFor/small-business.svg';
import finance from '../../../../assets/images/landing/ServiceFor/finance.svg';
import stateOwned from '../../../../assets/images/landing/ServiceFor/state-owned.svg';
import bigCompany from '../../../../assets/images/landing/ServiceFor/big-company.svg';
import leasing from '../../../../assets/images/landing/ServiceFor/leasing.svg';
import tradingCompanies from '../../../../assets/images/landing/ServiceFor/trading-companies.svg';
import lawyer from '../../../../assets/images/landing/ServiceFor/lawyer.svg';
import investment from '../../../../assets/images/landing/ServiceFor/investment.svg';
import online from '../../../../assets/images/landing/ServiceFor/online.svg';

export interface IServiceForItem {
  icon: string;
  title: string;
  text: string;
}

export const serviceForItems: IServiceForItem[] = [
  {
    icon: smallBusiness,
    title: 'Малый и средний бизнес:',
    text: 'Компании, которые хотят минимизировать риск при заключении сделок и выборе партнеров.',
  },
  {
    icon: finance,
    title: 'Финансовые учреждения:',
    text: 'Банки и другие финансовые организации, которые обязаны проверять своих клиентов для предотвращения мошенничества и соблюдения нормативных требований.',
  },
  {
    icon: stateOwned,
    title: 'Государcтвенные учреждения:',
    text: 'Организация, занимающиеся закупками и контрактами которым необходимо проверять надежность поставщиков и подрядчиков.',
  },
  {
    icon: bigCompany,
    title: 'Крупные корпорации:',
    text: 'Организации с большим количеством партнеров и клиентов, нуждающихся в тщательной проверке всех контрагентов.',
  },
  {
    icon: leasing,
    title: 'Лизинговые и страховые компании:',
    text: 'Компании, предоставляющие лизинг или страховые услуги, которые нуждаются в проверке надежности своих клиентов.',
  },
  {
    icon: tradingCompanies,
    title: 'Торговые и дистрибьюторские компании:',
    text: 'Бизнесы, которые работают с большим количеством поставщиков и хотят убедиться в их надежности и добросовестности.',
  },
  {
    icon: lawyer,
    title: 'Юридические фирмы:',
    text: 'Компании, предоставляющие юридические услуги, которые проверяют контрагентов своих клиентов для обеспечения правовой безопасности сделок.',
  },
  {
    icon: investment,
    title: 'Инвестиционные компании:',
    text: 'Инвесторы, которые проверяют потенциальных партнеров и стартапы перед вложением средств.',
  },

  {
    icon: online,
    title: 'Онлайн-платформы и маркетплейсы:',
    text: 'Платформы, где происходит взаимодействие между продавцами и покупателями, нуждающиеся в проверке надежности участников.',
  },
];
