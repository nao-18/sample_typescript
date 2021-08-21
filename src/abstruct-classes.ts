export {};

/**
 * 抽象クラスと抽象メソッド
 */
//抽象クラス
abstract class Animal {
  //抽象メソッド
  //シグネチャー
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'roar';
  }
}

//使用するクラスでは必ず抽象メソッドを実装する必要がある
class Tiger extends Animal {
  cry(): string {
    return 'grrrr';
  }
}

let lion = new Lion();
console.log(lion.cry());

let tiger = new Tiger();
console.log(tiger.cry());
