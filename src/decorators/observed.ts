export type PropertyUpdater<T> = (
  target: T,
  property: keyof T,
  newValue: T[keyof T]
) => void;


export const observed = (target: any, propertyKey: string) => {
  target[propertyKey] = true;
};
