export {};

/**
 * ConstractorParameters
 */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 23);
console.log(taro);

type PersonType = typeof Person;
// type PersonType = typeof Person

type Profile = ConstructorParameters<PersonType>;
// type Profile = [name: string, age: number]

const profile: Profile = ['hanako', 40];
const hanako = new Person(...profile);
console.log(hanako);

// 定義
type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
