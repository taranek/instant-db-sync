export type PropertyUpdater<T> = (
  target: T,
  property: keyof T,
  newValue: T[keyof T]
) => void;
export const property =
  (context: ThisType<any>, updater: PropertyUpdater<any>) =>
  (target: any, propertyKey: string) => {
    console.log("property decorator called on", context);
    let currentValue: any = target[propertyKey];
    Object.defineProperty(target, propertyKey, {
      set: (newValue: any) => {
        if (currentValue === undefined) {
          currentValue = newValue;
          return newValue;
        } else {
          console.log(
            `Property ${propertyKey} changed from: ${currentValue} to ${newValue}`
          );
          currentValue = newValue;
          updater(context, propertyKey, newValue);
          return newValue;
        }
      },
      get: () => {
        Reflect.get(target, propertyKey);
      },
    });
  };
