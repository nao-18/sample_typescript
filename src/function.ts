export {};

/**
 * 関数の場合のtypescript活用
 */
function bmi(height: number, weight: number) {
  return weight / (height * weight);
}

console.log(bmi(1.78, 80));
