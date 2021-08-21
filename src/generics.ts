export {};

/**
 * ジェネリクス
 * 汎用なクラスやメソッドを作る方法
 */

//型が違うために同じメソッドを複数書かないといけない場合が使い所
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

/**
 * Tはstringやnumberなどの型を汎用的に表すもの
 * 慣習として”T”で記述する
 * @param arg
 * @returns
 */
const echo = <T>(arg: T): T => {
  return arg;
};

//呼び出す際はメソッド名<使用する型>(引数)で使用する
console.log(echo<number>(1));
console.log(echo<string>('HOGE'));

/**
 * クラスで使う場合
 */
//クラス名の右に"<T>"を追加する
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
//呼び出しはクラス名の次に"<型>"を記述する
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Taroさん').echo());
console.log(new Mirror<boolean>(true).echo());
