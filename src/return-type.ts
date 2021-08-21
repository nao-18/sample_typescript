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

//ReturnType<式の型>
type ReturnTypeFromAdd = ReturnType<typeof add>;
// type ReturnTypeFromAdd = number
