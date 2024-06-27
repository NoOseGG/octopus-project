export const getPrice = (countMonth: number, countUser: number): number => {
  let price;

  switch (true) {
    case countUser >= 1 && countUser < 5: {
      price = 100;
      break;
    }
    case countUser >= 5 && countUser < 10: {
      price = 90;
      break;
    }
    case countUser >= 10 && countUser < 20: {
      price = 80;
      break;
    }
    case countUser >= 21 && countUser < 50: {
      price = 70;
      break;
    }
    case countUser >= 50 && countUser < 100: {
      price = 60;
      break;
    }
    case countUser >= 100: {
      price = 50;
      break;
    }
    default: {
      price = 100;
      break;
    }
  }

  return price * countMonth * countUser;
};

export enum CardType {
  DEMO,
  STANDARD,
  SPECIAL,
}

export const getName = (type: CardType) => {
  switch (type) {
    case CardType.DEMO:
      return 'Пробный';
    case CardType.STANDARD:
      return 'Месяц';
    case CardType.SPECIAL:
      return 'Пользовательский';
  }
};
