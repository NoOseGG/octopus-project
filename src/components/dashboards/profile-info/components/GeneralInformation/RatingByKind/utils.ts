import { DashboardObject, DashboardObjectForRating } from '@app/interfaces/interfaces';

export const calculateRating = (
  data: DashboardObject[] | undefined,
  setData: (newData: DashboardObjectForRating[]) => void,
  unn: string,
) => {
  if (data) {
    const result: DashboardObjectForRating[] = data.slice(0, 5).map((item, index) => {
      if (item.legal_entity_id === unn) return { ...item, position: index + 1, highlight: true };
      else return { ...item, position: index + 1 };
    });
    const index = data.findIndex((item) => item.legal_entity_id === unn);
    if (index > 4) result.push({ ...data[index], position: index + 1, highlight: true });
    if (index !== 0 && index !== data.length - 1) result.push({ ...data[data.length - 1], position: data.length - 1 });

    setData(result);
  }
};
