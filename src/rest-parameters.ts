export {};

/**
 * Restパラメータ
 *
 * restパラメータに関するサンプル
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters
 */
const reducer = (accemulator: number, currentValue: number): number => {
  console.log({ accemulator, currentValue });
  return accemulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

sum(1, 2, 3, 4, 5);
