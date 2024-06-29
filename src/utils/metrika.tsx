import { useLocation } from 'react-router';
import { useEffect } from 'react';

export const sendMetrika = (type: string, value: string) => {
  if (window.ym) {
    window.ym(97447786, type, value);
  }
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    sendMetrika('hit', location.pathname + location.search);
  }, [location]);
};
