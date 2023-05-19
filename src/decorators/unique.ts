import "reflect-metadata";

export const unique = (target: any, propertyKey: string) => {
  target[Symbol("unique")] = "123";
};

export const observed = (target: any, propertyKey: string) => {
  target[propertyKey] = true;
};
