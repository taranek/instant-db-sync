import "reflect-metadata";

export const unique = (target: any, propertyKey: string) => {
  target[Symbol("unique")] = "123";
  console.log("target", target);
};

export const observed = (target: any, propertyKey: string) => {
  target[propertyKey] = true;
  console.log("observed target", target);
};
