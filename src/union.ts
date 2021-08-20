export {};

/**
 * union型
 * 2つの型を持たせることができる
 */
let value: number | string = 1;
value = 'hoge';
value = 1000;

console.log({ value });
