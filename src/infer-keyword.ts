export {};

/**
 * Return Type
 * @param a
 * @param b
 * @returns
 */
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 3));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// 定義
// <T extends (...args: any) => any> と T extends (...args: any) => infer R は同様。
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
