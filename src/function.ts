export {};

/**
 * 関数の場合のtypescript活用
 */
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 80));
