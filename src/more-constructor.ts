export {};

/**
 * コンストラクタでの初期化省略記法
 */
class Person {
  //コンストラクタの引数にアクセス修飾子を追加すると"this.name=name"のような初期化処理をしてくれる。
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Taro', 35);
console.log(me);
