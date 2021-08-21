export {};

/**
 * 型の互換性
 * 構造的部分型
 */

/**
 * any型の互換性有無
 * →互換性がある
 */
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

//any型は代入される度に代入された型へ変化する
console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);
fooCompatible = 123;
console.log(typeof fooCompatible);

/**
 * stringとnumberの互換性有無
 * →互換性がない
 */
let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;
// Type 'number' is not assignable to type 'string'.

/**
 * sringとstringの互換性有無
 * →互換性がある
 */
let fooString: string;
let barString: string = 'string';

fooString = barString;

/**
 * stringとstringリテラルの互換性有無
 * →互換性がある
 */
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

/**
 * number型とnumberリテラル型の互換性有無
 * →互換性がある
 */
let fooNumber: number;
let fooNumberLiteral: 1997 = 1997;
fooNumber = fooNumberLiteral;

/**
 * オブジェクト間の互換性の有無
 */
//代入される変数のメンバが代入するインスタンス変数にないといけない
interface Animal {
  age: number;
  // name: string;
}

class Person {
  constructor(public age: number) {}
}
// オブジェクトの場合は代入する変数の型は関係しない
let me: Animal;
me = new Person(34);
