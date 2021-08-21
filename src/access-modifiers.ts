export {};

class Person {
  //何も記載しない場合はpublic
  public name: string;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationaliry: string) {
    super(name, age, nationaliry);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, natinaliry: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
//protectedは継承クラス内でのみ使用できる。インスタンスからはアクセスできない。
// console.log(taro.nationality);

let hanako = new Android('Hanako', 21, 'America');
//protectedは継承クラス内でのみ使用できる。インスタンスからはアクセスできない。
// console.log(hanako.nationality);
console.log(hanako.profile());
