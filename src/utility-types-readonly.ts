export {};

/**
 * ReadOnly
 */

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Taro',
  age: 34,
};

me.age++;
console.log(me.age);

//全ての型をreadonlyにできる
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Hanako',
  age: 28,
};

// friend.age++;
// Cannot assign to 'age' because it is a read-only property.

// カスタマイズ
type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
