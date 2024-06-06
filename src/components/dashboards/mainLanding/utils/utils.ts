export enum ScrollType {
  MainFunction = 'mainFunction',
  Sources = 'sources',
  Map = 'map',
  Tariffs = 'tariffs',
  ServiceFor = 'serviceFor',
  Demo = 'demo',
}

export const scrollToLanding = (scrollType: ScrollType) => {
  switch (scrollType) {
    case ScrollType.MainFunction: {
      const section = document.getElementById(ScrollType.MainFunction);
      section?.scrollIntoView({ behavior: 'smooth' });
      break;
    }
    case ScrollType.Sources: {
      const section = document.getElementById(ScrollType.Sources);
      section?.scrollIntoView({ behavior: 'smooth' });
      break;
    }
    case ScrollType.Map: {
      const section = document.getElementById(ScrollType.Map);
      section?.scrollIntoView({ behavior: 'smooth' });
      break;
    }
    case ScrollType.Tariffs: {
      const section = document.getElementById(ScrollType.Tariffs);
      section?.scrollIntoView({ behavior: 'smooth' });
      break;
    }
    case ScrollType.ServiceFor: {
      const section = document.getElementById(ScrollType.ServiceFor);
      section?.scrollIntoView({ behavior: 'smooth' });
      break;
    }
    case ScrollType.Demo: {
      const section = document.getElementById(ScrollType.Demo);
      section?.scrollIntoView({ behavior: 'smooth' });
      break;
    }
  }
};
