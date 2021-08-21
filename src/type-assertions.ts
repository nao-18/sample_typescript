export {};

/**
 * 型アサーション
 * なるべく早い段階で型をつける方が良い
 */

let name: any = 'Jon';

// let length = name.length as number;
//よりベターな書き方
let length = (name as string).length;

//非推奨な書き方
// let length = (<string>name).length;

// length = 'fooo';
// Type 'string' is not assignable to type 'number'.

console.log(length);
