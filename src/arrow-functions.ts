export {};

/**
 * アロー関数の型
 * @param height
 * @param weight
 * @returns
 */
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
  // ): number => {
  //   return height / (height * weight);
  // };
  //　ワンラインで書く場合はreturnが不要。
): number => height / (height * weight);

console.log(bmi(1.6, 58));
