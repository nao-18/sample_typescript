export {};

/**
 * 無名関数の型
 * @param height
 * @param weight
 * @returns
 */
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 80));
