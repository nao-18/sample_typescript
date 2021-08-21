export {};

/**
 * 静的メンバ
 */
class Me {
  // クラス変数
  // static修飾子で定義できる
  static isProgrammer: boolean = true;
  static firstName: string = 'Tanaka';
  static lastName: string = 'Taro';

  // クラスメソッド
  static work() {
    //クラス内ではthisでクラス変数へアクセスできる
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());
