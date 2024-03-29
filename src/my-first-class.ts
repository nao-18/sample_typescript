export {};

class Person {
  //プロパティへアノテーション追加
  name: string;
  age: number;

  //コンストラクタには戻り値のアノテーションは書かない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30);
console.log(taro.profile());
